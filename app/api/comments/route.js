import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Comment from "@/lib/models/Comment";

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
        const { postId, author, content } = await request.json();

        if (!postId || !author || !content) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
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
