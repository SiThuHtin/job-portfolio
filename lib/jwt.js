import { SignJWT, jwtVerify } from "jose";

export const ADMIN_SESSION_COOKIE = "admin_session";
export const ADMIN_CSRF_COOKIE = "admin_csrf";

const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is required");
    }
    return new TextEncoder().encode(secret);
};

export async function signJwt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h") // Token is valid for 24 hours
        .sign(getJwtSecretKey());
}

export async function verifyJwt(token) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch {
        return null;
    }
}

export function getSessionTokenFromRequest(request) {
    const cookieToken = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (cookieToken) {
        return cookieToken;
    }

    const authHeader = request.headers.get("authorization");
    return authHeader?.split(" ")[1] || null;
}

export async function verifyAdminSession(request) {
    const token = getSessionTokenFromRequest(request);
    if (!token) {
        return null;
    }

    return verifyJwt(token);
}

export function getCsrfTokenFromRequest(request) {
    return request.cookies.get(ADMIN_CSRF_COOKIE)?.value || null;
}

export function validateCsrfToken(request) {
    const cookieToken = getCsrfTokenFromRequest(request);
    const headerToken = request.headers.get("x-csrf-token");
    return !!cookieToken && !!headerToken && cookieToken === headerToken;
}

export function isSameOriginRequest(request) {
    const origin = request.headers.get("origin");
    if (!origin) {
        return false;
    }

    return origin === request.nextUrl.origin;
}
