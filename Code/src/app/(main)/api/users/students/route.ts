import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request: Request) {
  const users = await User.find({ role: "student" });
  console.log("Fetched users:", users);
  if (!users) {
    return NextResponse.json({ error: "Users not found" }, { status: 400 });
  }
  return NextResponse.json(users, { status: 200 });
}
