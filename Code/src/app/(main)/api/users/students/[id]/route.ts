import { connect } from "@/dbConfig/dbConfig";
import { Proposal } from "@/models/proposal.model";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("---------Fetching student with ID-------:", params.id);
  const student = await User.findById(params.id);
  console.log("---------Fetched student-------:", student);

  if (!student) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json(student, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();
  console.log("---Fetched data to update student---:", data);

  const student = await User.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  console.log("----Updated student----:", student);

  if (!student) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json(student, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const student = await User.findByIdAndDelete(params.id);
  console.log("---------Deleting student-------:", student);

  if (!student) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json(student, { status: 200 });
}
