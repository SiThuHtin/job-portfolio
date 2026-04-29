import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { isSameOriginRequest, validateCsrfToken, verifyAdminSession } from "@/lib/jwt";
import { validateProjectPayload } from "@/lib/validation";

export async function GET(request, { params }) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const project = await Project.findById(id);

        if (!project) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ project }, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

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
        const validation = validateProjectPayload(payload);
        if (!validation.ok) {
            return NextResponse.json({ message: validation.message }, { status: 400 });
        }

        await connectToDatabase();

        const updated = await Project.findByIdAndUpdate(
            id,
            validation.data,
            { new: true, runValidators: true }
        );

        if (!updated) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ message: "Project updated", project: updated }, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}

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
        const deleted = await Project.findByIdAndDelete(id);

        if (!deleted) return NextResponse.json({ message: "Not found" }, { status: 404 });

        return NextResponse.json({ message: "Deleted" }, { status: 200 });
    } catch {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
