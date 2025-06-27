import { connect } from "@/dbConfig/dbConfig";
import { Proposal } from "@/models/proposal.model";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  //extract data from token

  const proposals = await Proposal.find();
  console.log("Fetched proposals:", proposals);
  if (!proposals) {
    return NextResponse.json(
      { message: "No proposals found!" },
      { status: 404 }
    );
  }

  return NextResponse.json(proposals, { status: 200 });
}
