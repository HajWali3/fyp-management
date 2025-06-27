"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProposalForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    domain: "",
    tools: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/proposals/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Proposal submitted successfully!");
        router.push("/student");
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Submit New Proposal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-slate-700">
              Project Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">
              Description
            </label>
            <textarea
              name="description"
              className="w-full border border-slate-300 rounded-lg px-4 py-2 h-32"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">
              Domain
            </label>
            <input
              name="domain"
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              value={formData.domain}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-slate-700">
              Tools/Technologies
            </label>
            <input
              name="tools"
              type="text"
              className="w-full border border-slate-300 rounded-lg px-4 py-2"
              value={formData.tools}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700"
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}
