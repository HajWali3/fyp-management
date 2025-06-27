"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { s } from "framer-motion/client";
import { useRouter } from "next/router";

interface Supervisor {
  _id: string;
  username: string;
  email: string;
  role: string;
  fullname?: string;
  project?: {
    title: string;
  };
  student?: {
    name: string;
  };
  department?: {
    name: string;
  };
}

export default function ProposalPage() {
  const params = useParams();
  const id = params?.id as string;
  const [proposal, setProposal] = useState({
    title: "",
    description: "",
    status: "",
    createdAt: "",
    updatedAt: "",
  });

  const [selectedSupervisor, setSelectedSupervisor] = useState("");

  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users/supervisors")
      .then((res) => res.json())
      .then((data) => {
        setSupervisors(data);
        console.log("Supervisors data:", supervisors);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching supervisors:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchProposalDetails = async () => {
      try {
        const res = await axios.get(`/api/proposals/${id}`);
        if (res.status === 200) {
          setProposal(res.data);
        } else {
          console.error("Failed to fetch proposal details");
        }
      } catch (err) {
        console.error("Error fetching proposal:", err);
      }
    };

    fetchProposalDetails();
  }, [id]);

  // 👇 Assign Supervisor Handler
  const assignSupervisor = async () => {
    try {
      const res = await axios.patch(`/api/proposals/${id}/assign`, {
        supervisorId: selectedSupervisor,
      });
      if (res.status === 200) {
        alert("Supervisor assigned successfully!");
        setProposal(res.data); // Refresh proposal if supervisor info is included
      }
    } catch (err) {
      console.error("Assignment error:", err);
      alert("Failed to assign supervisor.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading supervisors details...</p>
      </div>
    );
  }

  return (
    <div className=" pt-25 justify-items-center">
      <div className="min-h-screen bg-black text-white px-6 md:px-20 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 border-b pb-2 border-gray-700">
            Proposal Details
          </h1>

          <div className="bg-gray-900 rounded-xl shadow-lg p-6 space-y-4 border border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-300">Title</h2>
              <p className="text-lg text-white">{proposal.title || "—"}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-300">
                Description
              </h2>
              <p className="text-white">
                {proposal.description || "No description provided."}
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-300">Status</h2>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    proposal.status === "approved"
                      ? "bg-green-600 text-white"
                      : proposal.status === "pending"
                      ? "bg-yellow-600 text-white"
                      : "bg-red-600 text-white"
                  }`}
                >
                  {proposal.status || "Unknown"}
                </span>
              </div>

              <div className="mt-6 bg-gray-900 rounded-xl p-6 border border-gray-700">
                <h2 className="text-xl font-semibold text-gray-300 mb-2">
                  Assign Supervisor
                </h2>

                <select
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-600 mb-4"
                  value={selectedSupervisor}
                  onChange={(e) => setSelectedSupervisor(e.target.value)}
                >
                  <option value="">-- Select Supervisor --</option>
                  {supervisors.length === 0 ? (
                    <option disabled>No supervisors available</option>
                  ) : (
                    supervisors.map((sup) => (
                      <option
                        key={sup.id}
                        value={sup.id}
                        disabled={sup.assignedCount >= 5}
                      >
                        {sup.name} ({sup.assignedCount}/5 students)
                      </option>
                    ))
                  )}
                </select>

                <button
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-md"
                  onClick={assignSupervisor}
                  disabled={!selectedSupervisor}
                >
                  Assign Supervisor
                </button>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-300">
                  Created At
                </h2>
                <p className="text-white">
                  {new Date(proposal.createdAt).toLocaleString()}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-300">
                  Last Updated
                </h2>
                <p className="text-white">
                  {new Date(proposal.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-md shadow transition"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
