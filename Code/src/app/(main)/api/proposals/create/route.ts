import { connect } from "@/dbConfig/dbConfig";
import { Proposal } from "@/models/proposal.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  //extract data from token
  const reqBody = await request.json();
  let { title, description, tools, domain }: any = reqBody;

  console.log("Received data:", reqBody);
  // Validate the data
  if (!title || !description || !tools || !domain) {
    return NextResponse.json(
      { message: "All fields are required!" },
      { status: 400 }
    );
  }

  const newProposal = new Proposal({
    title,
    description,
    tools,
    domain,
  });

  const savedProposal = await newProposal.save();
  console.log("Saved proposal:", savedProposal);

  return NextResponse.json(
    { message: "Proposal created successfully!" },

    { status: 201 }
  );
}
