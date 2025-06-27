"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ConfirmDialog from "@/components/ConfirmDialog";

interface Student {
  _id: string;
  username: string;
  email: string;
  role: string;
  fullname?: string;
  project?: {
    title: string;
  };
  supervisor?: {
    name: string;
  };
}
export default function AdminProposalsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/users/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  const confirmDelete = async () => {
    if (!studentToDelete) return;

    try {
      const res = await fetch(`/api/proposals/${studentToDelete}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setStudents((prev) => prev.filter((s) => s._id !== studentToDelete));
        toast.success("Proposal deleted successfully");
      } else {
        toast.error("Failed to delete proposal.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("An error occurred while deleting.");
    } finally {
      setShowConfirm(false);
      setStudentToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading student details...</p>
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
        setStudents(students.filter((p) => p._id !== id));
        toast.success("Proposal deleted successfully");
      } else {
        alert("Failed to delete proposal.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      toast.error("Failed to delete proposal.");
    }
  };

  if (loading) return <p className="text-white p-6">Loading proposals...</p>;

  return (
    <div className=" pt-36 justify-items-center">
      <div className="min-h-screen min-w-screen bg-black text-white px-20 py-1">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">
            🧑‍🎓 All Registered Students
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
                {students.map((p) => (
                  <tr
                    key={p._id}
                    className="border-t border-gray-700 hover:bg-gray-800 transition duration-200"
                  >
                    <td className="px-4 py-3">{p.fullname}</td>
                    <td className="px-4 py-3">{p.username}</td>
                    <td className="px-4 py-3">{p.project?.title || "-"}</td>
                    <td className="px-4 py-3">
                      {p.supervisor?.name || "Not Assigned"}
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
                        onClick={() => {
                          setStudentToDelete(p._id);
                          setShowConfirm(true);
                        }}
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
      <ConfirmDialog
        open={showConfirm}
        message="Are you sure you want to delete this proposal? This action cannot be undone."
        onCancel={() => setShowConfirm(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
