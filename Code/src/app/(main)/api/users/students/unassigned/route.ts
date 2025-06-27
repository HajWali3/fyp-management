import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export async function GET() {
  try {
    await connect();

    // Find students who have NO assigned project or supervisor
    const unassignedStudents = await User.find({
      role: "student",
      $or: [
        { project: { $exists: false } },
        { "project.title": null },
        { supervisor: { $exists: false } },
        { "supervisor.id": null },
      ],
    }).select("_id fullname username email");

    return NextResponse.json(unassignedStudents);
  } catch (err) {
    console.error("Error fetching unassigned students:", err);
    return NextResponse.json(
      { error: "Failed to fetch unassigned students" },
      { status: 500 }
    );
  }
}
