"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Student {
  _id: string;
  username: string;
  email: string;
  role: string;
  fullname?: string;
}

export default function AllStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading)
    return <p className="p-6 text-lg text-gray-600">Loading students...</p>;

  return (
    <div className=" pt-36 justify-items-center">
      <div className="min-h-screen min-w-screen bg-slate-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            All Registered Students
          </h1>

          {students.length === 0 ? (
            <p className="text-gray-500">No students found.</p>
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
                  {students.map((student, index) => (
                    <tr
                      key={student._id}
                      className="hover:bg-slate-50 text-slate-700 border-t border-slate-200"
                    >
                      <td className="px-6 py-4">{student.fullname || "N/A"}</td>
                      <td className="px-6 py-4">{student.username}</td>
                      <td className="px-6 py-4">{student.email}</td>
                      <td className="px-6 py-4">{"CS / SE / N/A"}</td>{" "}
                      {/* Hardcoded for now */}
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={`/admin/students/${student._id}`}
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
