import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import { verifyJwt } from "@/lib/jwt";

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
        const authHeader = request.headers.get("authorization");
        const token = authHeader?.split(" ")[1];
        if (!token || !(await verifyJwt(token))) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, summary, content, category, readTime } = await request.json();
        await connectToDatabase();

        const newPost = await Post.create({
            title,
            summary,
            content,
            category,
            readTime,
        });

        return NextResponse.json({ message: "Post Created", post: newPost }, { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ message: "Failed to create post" }, { status: 500 });
    }
}
