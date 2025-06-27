import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/project.model";

export async function GET() {
  try {
    await connect();

    // Get projects not yet assigned (assume assigned = has student/supervisor)
    const unassignedProjects = await Project.find({
      $or: [
        { student: { $exists: false } },
        { supervisor: { $exists: false } },
      ],
    }).select("_id title");

    return NextResponse.json(unassignedProjects);
  } catch (err) {
    console.error("Failed to fetch unassigned projects:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
