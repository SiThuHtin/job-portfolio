import { NextResponse } from "next/server";
import { signJwt } from "@/lib/jwt";

export async function POST(request) {
    try {
        const { password } = await request.json();

        if (password === process.env.ADMIN_PASSWORD) {
            const token = await signJwt({ role: "admin" });
            return NextResponse.json({ success: true, token }, { status: 200 });
        } else {
            return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
    }
}
