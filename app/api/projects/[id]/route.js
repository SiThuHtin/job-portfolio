import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export async function GET(request, { params }) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const project = await Project.findById(id);

        if (!project) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ project }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    const { id } = await params;
    try {
        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, description, imageUrl, projectUrl, order } = await request.json();
        await connectToDatabase();

        const updated = await Project.findByIdAndUpdate(
            id,
            { title, description, imageUrl, projectUrl, order },
            { new: true }
        );

        if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ message: "Project updated", project: updated }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const { id } = await params;
    try {
        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        await connectToDatabase();
        const deleted = await Project.findByIdAndDelete(id);

        if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ message: "Deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
