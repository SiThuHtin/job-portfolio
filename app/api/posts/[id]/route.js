import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";

// GET a specific post by ID
export async function GET(request, { params }) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const post = await Post.findById(id);

        if (!post) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ post }, { status: 200 });
    } catch (error) {
        console.error("Error fetching post:", error);
        return NextResponse.json({ message: "Failed to fetch post" }, { status: 500 });
    }
}

// PUT (update) a specific post
export async function PUT(request, { params }) {
    const { id } = await params;
    try {
        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, summary, content, category, readTime } = await request.json();
        await connectToDatabase();

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, summary, content, category, readTime },
            { new: true } // Returns the updated document
        );

        if (!updatedPost) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Post updated", post: updatedPost }, { status: 200 });
    } catch (error) {
        console.error("Error updating post:", error);
        return NextResponse.json({ message: "Failed to update post" }, { status: 500 });
    }
}

// DELETE a specific post
export async function DELETE(request, { params }) {
    const { id } = await params;
    try {
        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting post:", error);
        return NextResponse.json({ message: "Failed to delete post" }, { status: 500 });
    }
}
