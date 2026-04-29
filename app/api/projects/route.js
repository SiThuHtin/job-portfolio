import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { isSameOriginRequest, validateCsrfToken, verifyAdminSession } from "@/lib/jwt";
import { validateProjectPayload } from "@/lib/validation";

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
        if (!(await verifyAdminSession(request))) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        if (!isSameOriginRequest(request) || !validateCsrfToken(request)) {
            return NextResponse.json({ message: "Invalid CSRF token" }, { status: 403 });
        }

        const payload = await request.json();
        const validation = validateProjectPayload(payload);
        if (!validation.ok) {
            return NextResponse.json({ message: validation.message }, { status: 400 });
        }

        await connectToDatabase();

        const newProject = await Project.create(validation.data);

        return NextResponse.json({ message: "Project created", project: newProject }, { status: 201 });
    } catch (error) {
        console.error("Error creating project:", error);
        return NextResponse.json({ message: "Failed to create project" }, { status: 500 });
    }
}
