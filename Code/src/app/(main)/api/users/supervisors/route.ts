import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request) {
  const Supervisors = await User.find({ role: "supervisor" });
  console.log("Fetched users:", Supervisors);
  if (!Supervisors) {
    return NextResponse.json({ error: "Users not found" }, { status: 400 });
  }
  return NextResponse.json(Supervisors, { status: 200 });
}
