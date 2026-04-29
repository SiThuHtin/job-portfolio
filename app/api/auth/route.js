import { NextResponse } from "next/server";
import {
    ADMIN_CSRF_COOKIE,
    ADMIN_SESSION_COOKIE,
    getCsrfTokenFromRequest,
    signJwt,
    verifyAdminSession,
} from "@/lib/jwt";

const rateLimitMap = new Map();

const checkRateLimit = (ip) => {
    const now = Date.now();
    const limits = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - limits.lastReset > 15 * 60 * 1000) {
        limits.count = 0;
        limits.lastReset = now;
    }

    if (limits.count >= 10) {
        return false;
    }

    limits.count += 1;
    rateLimitMap.set(ip, limits);
    return true;
};

export async function POST(request) {
    try {
        const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown-ip";
        if (!checkRateLimit(ip)) {
            return NextResponse.json({ success: false, message: "Too many login attempts. Please try again later." }, { status: 429 });
        }

        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!adminPassword) {
            console.error("ADMIN_PASSWORD is not configured");
            return NextResponse.json({ success: false, message: "Authentication is not configured." }, { status: 500 });
        }

        const { password } = await request.json();

        if (password === adminPassword) {
            const token = await signJwt({ role: "admin" });
            const csrfToken = crypto.randomUUID();
            const response = NextResponse.json({ success: true }, { status: 200 });
            response.cookies.set({
                name: ADMIN_SESSION_COOKIE,
                value: token,
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 60 * 60 * 24,
            });
            response.cookies.set({
                name: ADMIN_CSRF_COOKIE,
                value: csrfToken,
                httpOnly: false,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                path: "/",
                maxAge: 60 * 60 * 24,
            });
            return response;
        } else {
            return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
        }
    } catch {
        return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
    }
}

export async function GET(request) {
    const session = await verifyAdminSession(request);
    return NextResponse.json({
        authenticated: !!session,
        csrfToken: session ? getCsrfTokenFromRequest(request) : null,
    });
}

export async function DELETE() {
    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set({
        name: ADMIN_SESSION_COOKIE,
        value: "",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 0,
    });
    response.cookies.set({
        name: ADMIN_CSRF_COOKIE,
        value: "",
        httpOnly: false,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 0,
    });
    return response;
}
