import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import { isSameOriginRequest, validateCsrfToken, verifyAdminSession } from "@/lib/jwt";
import { validatePostPayload } from "@/lib/validation";

// GET all posts
export async function GET() {
    try {
        await connectToDatabase();
        // Fetch posts sorted by newest (descending createdAt)
        const posts = await Post.find().sort({ createdAt: -1 });
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ message: "Failed to fetch posts" }, { status: 500 });
    }
}

// POST a new blog post
export async function POST(request) {
    try {
        if (!(await verifyAdminSession(request))) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        if (!isSameOriginRequest(request) || !validateCsrfToken(request)) {
            return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
        }

        const payload = await request.json();
        const validation = validatePostPayload(payload);
        if (!validation.ok) {
            return NextResponse.json({ message: validation.message }, { status: 400 });
        }

        await connectToDatabase();

        const newPost = await Post.create(validation.data);

        return NextResponse.json({ message: "Post Created", post: newPost }, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
    }
}
