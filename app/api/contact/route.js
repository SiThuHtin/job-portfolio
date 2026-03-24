import { NextResponse } from "next/server";

// Using a basic in-memory rate-limiter to prevent email spam as well!
const rateLimitMap = new Map();

const checkRateLimit = (ip) => {
    const now = Date.now();
    const limits = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    // Reset rate-limit window every 1 hour for emails
    if (now - limits.lastReset > 3600000) {
        limits.count = 0;
        limits.lastReset = now;
    }

    // Limit to 3 emails per IP per hour
    if (limits.count >= 3) {
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
            return NextResponse.json(
                { message: "You have sent too many messages recently. Please try again later." },
                { status: 429 }
            );
        }

        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Prepare payload for EmailJS REST API
        const payload = {
            service_id: process.env.EMAILJS_SERVICE_ID || 'service_37ugmkr',
            template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_ylumre8',
            user_id: process.env.EMAILJS_PUBLIC_KEY || 'F3RuUwL4wRRGypadF',
            template_params: {
                from_name: name,
                from_email: email,
                message: message,
                to_email: 'sithuhtin2022@gmail.com'
            }
        };

        // Send request directly to EmailJS from our backend
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
        } else {
            console.error("EmailJS Error Response:", await response.text());
            return NextResponse.json({ message: "Failed to send message via Email service." }, { status: 500 });
        }
    } catch (error) {
        console.error("Contact Form Server Error:", error);
        return NextResponse.json({ message: "Internal server error." }, { status: 500 });
    }
}
