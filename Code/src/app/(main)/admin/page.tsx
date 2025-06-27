"use client";
import React from "react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

export default function AdminDashboard() {
  const totalStudents = 120;
  const totalSupervisors = 15;
  const totalProjects = 40;
  const unassignedProposals = 7;

  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 pt-36 justify-items-center">
        {/* Card 1 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative w-80 sm:w-96 flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
              <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                Total Students
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {totalStudents}
              </p>

              <Link href="/admin/students">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Manage Students
                </button>
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative w-80 sm:w-96 flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
              <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                Total Supervisors
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {totalSupervisors}
              </p>

              <Link
                href="/admin/supervisors"
                className="text-indigo-600 hover:underline mt-2 inline-block"
              >
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Manage Supervisors
                </button>
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative w-80 sm:w-96 flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
              <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                Total Projects
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {totalProjects}
              </p>

              <Link href="student/submission">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  View Projects
                </button>
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
            <div className="relative w-80 sm:w-96 flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
              <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-2 w-2 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                Unassigned Proposals
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {unassignedProposals}
              </p>

              <Link href="/admin/assign">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Assign Now
                </button>
              </Link>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
