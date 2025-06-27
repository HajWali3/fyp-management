"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface User {
  _id: string;
  fullname?: string;
  username: string;
  email: string;
}

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

export default function AssignForm() {
  const [students, setStudents] = useState<User[]>([]);
  const [supervisors, setSupervisors] = useState<User[]>([]);
  const [proposals, setProposals] = useState<Proposal[]>([]);

  const [studentId, setStudentId] = useState("");
  const [supervisorId, setSupervisorId] = useState("");
  const [proposalId, setProposalId] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/users/students/unassigned")
      .then((res) => res.json())
      .then(setStudents)
      .catch(() => toast.error("Failed to load students"));

    fetch("/api/users/supervisors")
      .then((res) => res.json())
      .then(setSupervisors)
      .catch(() => toast.error("Failed to load supervisors"));

    fetch("/api/proposals/get-all")
      .then((res) => res.json())
      .then((data: Proposal[]) => {
        // Filter only approved + unassigned proposals
        const filtered = data.filter(
          (p) => p.status === "Approved" && !p.supervisor
        );
        setProposals(filtered);
      })
      .catch(() => toast.error("Failed to load proposals"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentId || !supervisorId || !proposalId) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentId, supervisorId, proposalId }),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success(result.message || "Proposal assigned successfully");
        setStudentId("");
        setSupervisorId("");
        setProposalId("");
      } else {
        toast.error(result.error || "Assignment failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 max-w-xl mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Assign Approved Proposal
      </h2>

      {/* Student */}
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          Student
        </label>
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <option value="">-- Select Student --</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.fullname || s.username}
            </option>
          ))}
        </select>
      </div>

      {/* Supervisor */}
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          Supervisor
        </label>
        <select
          value={supervisorId}
          onChange={(e) => setSupervisorId(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <option value="">-- Select Supervisor --</option>
          {supervisors.map((s) => (
            <option key={s._id} value={s._id}>
              {s.fullname || s.username}
            </option>
          ))}
        </select>
      </div>

      {/* Proposal */}
      <div>
        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
          Approved Proposal
        </label>
        <select
          value={proposalId}
          onChange={(e) => setProposalId(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <option value="">-- Select Approved Proposal --</option>
          {proposals.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold"
      >
        {loading ? "Assigning..." : "Assign Proposal"}
      </button>
    </form>
  );
}
