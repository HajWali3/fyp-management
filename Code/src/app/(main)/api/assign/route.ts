import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Project from "@/models/project.model";

export async function POST(req: Request) {
  try {
    await connect();

    const body = await req.json();
    const { studentId, supervisorId, projectTitle } = body;

    // Validate required fields
    if (!studentId || !supervisorId || !projectTitle) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Find student
    const student = await User.findById(studentId);
    if (!student || student.role !== "student") {
      return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    // Find supervisor
    const supervisor = await User.findById(supervisorId);
    if (!supervisor || supervisor.role !== "supervisor") {
      return NextResponse.json(
        { error: "Supervisor not found" },
        { status: 404 }
      );
    }

    // Create or update a Project (optional — depends on your logic)
    const project = await Project.create({
      title: projectTitle,
      student: student._id,
      supervisor: supervisor._id,
    });

    // Update student's document to include project and supervisor info
    student.project = {
      title: projectTitle,
      _id: project._id, // optional if you're embedding
    };

    student.supervisor = {
      name: supervisor.fullname || supervisor.username,
      id: supervisor._id,
    };

    await student.save();

    return NextResponse.json(
      { message: "Project assigned successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Assignment error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
