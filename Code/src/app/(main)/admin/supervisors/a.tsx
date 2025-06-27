"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Supervisor {
  _id: string;
  username: string;
  email: string;
  role: string;
  fullname?: string;
}

export default function AllSupervisorssPage() {
  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users/supervisors")
      .then((res) => res.json())
      .then((data) => {
        setSupervisors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching supervisors:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="p-6 text-lg text-gray-600">Loading supervisors...</p>;

  return (
    <div className=" pt-36 justify-items-center">
      <div className="min-h-screen min-w-screen bg-slate-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            All Registered Supervisors
          </h1>

          {supervisors.length === 0 ? (
            <p className="text-gray-500">No supervisors found.</p>
          ) : (
            <div className="overflow-x-auto rounded-xl shadow-sm border border-slate-200">
              <table className="min-w-full bg-gray-100 text-sm text-left">
                <thead className="bg-slate-200 text-slate-700 uppercase tracking-wider text-xs ">
                  <tr>
                    <th className="px-6 py-3 ">Full Name</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Department</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {supervisors.map((supervisor, index) => (
                    <tr
                      key={supervisor._id}
                      className="hover:bg-slate-50 text-slate-700 border-t border-slate-200"
                    >
                      <td className="px-6 py-4">
                        {supervisor.fullname || "N/A"}
                      </td>
                      <td className="px-6 py-4">{supervisor.username}</td>
                      <td className="px-6 py-4">{supervisor.email}</td>
                      <td className="px-6 py-4">{"CS / SE / N/A"}</td>{" "}
                      {/* Hardcoded for now */}
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/supervisors/${supervisor._id}`}
                          className="text-blue-600 hover:underline mr-3"
                        >
                          View
                        </Link>

                        <button className="text-yellow-600 hover:underline mr-3">
                          Edit
                        </button>
                        <button className="text-red-600 hover:underline">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
