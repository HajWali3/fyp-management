"use client";
import React, { useEffect, useState } from "react";

interface Proposal {
  id: string;
  title: string;
  abstract: string;
  domain: string;
  tools: string;
  studentName: string;
}

export default function ReviewProposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);

  useEffect(() => {
    fetch("/api/proposals")
      .then((res) => res.json())
      .then((data) => setProposals(data))
      .catch((err) => console.error("Failed to fetch proposals:", err));
  }, []);

  const handleDecision = async (
    id: string,
    status: "approved" | "rejected"
  ) => {
    const res = await fetch(`/api/proposals/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (res.ok) {
      setProposals((prev) => prev.filter((p) => p.id !== id));
      alert(`Proposal ${status}`);
    } else {
      alert("Failed to update proposal status");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Review Proposals
        </h1>

        {proposals.length === 0 ? (
          <p className="text-slate-600">No proposals to review.</p>
        ) : (
          <div className="space-y-6">
            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="border-l-4 border-emerald-500 bg-slate-100 p-4 rounded-lg"
              >
                <h2 className="text-xl font-semibold text-slate-800">
                  {proposal.title}
                </h2>
                <p className="text-slate-700 mt-2">{proposal.abstract}</p>
                <p className="text-slate-600 text-sm mt-1">
                  Domain: {proposal.domain}
                </p>
                <p className="text-slate-600 text-sm">
                  Tools: {proposal.tools}
                </p>
                <p className="text-slate-500 text-sm">
                  Submitted by: {proposal.studentName}
                </p>

                <div className="mt-4 space-x-3">
                  <button
                    onClick={() => handleDecision(proposal.id, "approved")}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDecision(proposal.id, "rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
