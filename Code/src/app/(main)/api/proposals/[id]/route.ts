import { connect } from "@/dbConfig/dbConfig";
import { Proposal } from "@/models/proposal.model";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

connect();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log("---------Fetching proposal with ID-------:", params.id);
  const proposal = await Proposal.findById(params.id);
  console.log("---------Proposal found-------:", proposal);

  if (!proposal) {
    return NextResponse.json({ error: "Proposal not found" }, { status: 400 });
  }
  return NextResponse.json(proposal, { status: 200 });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json();

  const updatedProposal = await Proposal.findByIdAndUpdate(params.id, data, {
    new: true,
  });

  if (!updatedProposal) {
    return NextResponse.json({ error: "Proposal not found" }, { status: 400 });
  }

  return NextResponse.json({ status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await Proposal.findByIdAndDelete(params.id);

  return NextResponse.json({
    status: 200,
    message: "Proposal deleted successfully",
  });
}
