import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/lib/models/Project";

export async function GET() {
    try {
        await connectToDatabase();
        const projects = await Project.find().sort({ order: 1, createdAt: -1 });
        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        console.error("Error fetching projects:", error);
        return NextResponse.json({ message: "Failed to fetch projects" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const authHeader = request.headers.get("authorization");
        if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { title, description, imageUrl, projectUrl, order } = await request.json();
        await connectToDatabase();

        const newProject = await Project.create({
            title,
            description,
            imageUrl,
            projectUrl,
            order: order || 0,
        });

        return NextResponse.json({ message: "Project created", project: newProject }, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ message: "Failed to create project" }, { status: 500 });
    }
}
