import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import { isSameOriginRequest, validateCsrfToken, verifyAdminSession } from "@/lib/jwt";
import { validatePostPayload } from "@/lib/validation";

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

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            validation.data,
            { new: true, runValidators: true } // Returns the updated document
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
        if (!(await verifyAdminSession(request))) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        if (!isSameOriginRequest(request) || !validateCsrfToken(request)) {
            return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
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
