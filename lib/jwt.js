import { SignJWT, jwtVerify } from "jose";

const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET || process.env.ADMIN_PASSWORD || "fallback_secret_key";
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
    } catch (error) {
        return null;
    }
}
