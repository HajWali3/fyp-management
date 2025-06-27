"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Proposal {
  _id: string;
  title: string;
  status: string;
  student?: {
    name: string;
    email: string;
  };
  supervisor?: {
    name: string;
  };
}

export default function AdminProposalsPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/proposals/get-all")
      .then((res) => res.json())
      .then((data) => {
        setProposals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching proposals:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this proposal?"
    );
    if (!confirm) return;

    try {
      const res = await fetch(`/api/proposals/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProposals(proposals.filter((p) => p._id !== id));
      } else {
        alert("Failed to delete proposal.");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <p className="text-white p-6">Loading proposals...</p>;

  return (
    <div className=" pt-36 justify-items-center">
      <div className="min-h-screen min-w-screen bg-black text-white px-20 py-1">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            📋 All Project Proposals
          </h1>

          <div className="overflow-x-auto bg-gray-900 rounded-xl shadow-md">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Student</th>
                  <th className="px-4 py-3">Supervisor</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {proposals.map((p) => (
                  <tr
                    key={p._id}
                    className="border-t border-gray-700 hover:bg-gray-800 transition duration-200"
                  >
                    <td className="px-4 py-3">{p.title}</td>
                    <td
                      className={`px-4 py-3 font-semibold ${getStatusColor(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </td>
                    <td className="px-4 py-3">
                      {p.student?.name || "N/A"}
                      <div className="text-xs text-gray-400">
                        {p.student?.email}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {p.supervisor?.name || "Not Assigned"}
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() =>
                          router.push(`/admin/assign/proposals/${p._id}`)
                        }
                        className="text-indigo-400 hover:underline"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          router.push(`/admin/assign/proposals/update/${p._id}`)
                        }
                        className="text-yellow-400 hover:underline"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="text-red-400 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case "Approved":
      return "text-green-400";
    case "Rejected":
      return "text-red-400";
    case "Pending":
    default:
      return "text-yellow-400";
  }
}
