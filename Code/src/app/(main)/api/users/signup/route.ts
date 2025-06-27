import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    let { fullname, username, email, password, role }: any = reqBody;

    //validation
    console.log("Data......", reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const checkId = username.slice(0, 2);
    console.log("checkId", checkId.toLowerCase() !== "sp");

    // if (checkId.toLowerCase() === "sp" || checkId.toLowerCase() === "fa") {
    //   role = "student";
    // } else if (username === "admin") {
    //   role = "admin";
    // } else {
    //   role = "supervisor";
    // }
    // console.log("role", role);

    // role = "student";

    const newUser = await User.create({
      fullname: fullname?.trim(),
      username: username?.trim(),
      email: email?.trim(),
      role: role,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("savedUser", savedUser);

    //send verifction email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return NextResponse.json({
      message: "User registered succesfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
