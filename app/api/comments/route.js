import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Comment from "@/lib/models/Comment";

// In-memory store for basic rate-limiting (Works per serverless instance cold start)
const rateLimitMap = new Map();

const checkRateLimit = (ip) => {
    const now = Date.now();
    const limits = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    // Reset rate-limit window every 60 seconds
    if (now - limits.lastReset > 60000) {
        limits.count = 0;
        limits.lastReset = now;
    }

    // Limit to 5 comments per IP per minute
    if (limits.count >= 5) {
        return false; 
    }

    limits.count += 1;
    rateLimitMap.set(ip, limits);
    return true;
};

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const postId = searchParams.get("postId");

        if (!postId) {
            return NextResponse.json({ message: "postId is required" }, { status: 400 });
        }

        await connectToDatabase();
        const comments = await Comment.find({ postId }).sort({ createdAt: -1 });

        return NextResponse.json({ comments }, { status: 200 });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        // Retrieve client IP address
        const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown-ip";

        if (!checkRateLimit(ip)) {
            return NextResponse.json({ message: "You are posting too fast. Please wait a moment." }, { status: 429 });
        }

        const { postId, author, content } = await request.json();

        if (!postId || !author || !content) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Input Validation (Prevent Database memory overflow / String crashes)
        if (author.length > 50) {
            return NextResponse.json({ message: "Name cannot exceed 50 characters" }, { status: 400 });
        }
        if (content.length > 1000) {
            return NextResponse.json({ message: "Comment cannot exceed 1000 characters" }, { status: 400 });
        }

        await connectToDatabase();
        const newComment = new Comment({ postId, author, content });
        await newComment.save();

        return NextResponse.json({ message: "Comment added successfully", comment: newComment }, { status: 201 });
    } catch (error) {
        console.error("Error saving comment:", error);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
