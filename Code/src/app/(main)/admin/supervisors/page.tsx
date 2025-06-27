"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

export default function AdminProposalsPage() {
  const [supervisors, setSupervisors] = useState<Supervisor[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading supervisors details...</p>
      </div>
    );
  }

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
        setSupervisors(supervisors.filter((p) => p._id !== id));
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
            🧑‍💼 All Registered Supervisors
          </h1>

          <div className="overflow-x-auto bg-gray-900 rounded-xl shadow-md">
            <table className="min-w-full table-auto text-sm text-left">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Username</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {supervisors.map((p) => (
                  <tr
                    key={p._id}
                    className="border-t border-gray-700 hover:bg-gray-800 transition duration-200"
                  >
                    <td className="px-4 py-3">{p.fullname}</td>
                    <td className="px-4 py-3">{p.username}</td>
                    <td className="px-4 py-3">{p.project?.title || "-"}</td>
                    <td className="px-4 py-3">
                      {p.student?.name || "Not Assigned"}
                    </td>
                    <td className="px-4 py-3 space-x-2">
                      <button
                        onClick={() => router.push(`/admin/students/${p._id}`)}
                        className="text-indigo-400 hover:underline"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          router.push(`/admin/students/update/${p._id}`)
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
