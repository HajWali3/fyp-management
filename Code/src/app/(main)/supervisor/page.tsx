"use client";
import React from "react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/Navbar";

export default function SupervisorDashboard() {
  const totalStudents = 5;
  const pendingProposals = 2;
  const recentSubmissions = 3;
  const gradesDue = 1;

  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-5   pt-36 justify-items-center">
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
                Assigned Students
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {totalStudents}
              </p>

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
                Pending Proposals
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {pendingProposals}
              </p>

              <Link href="student/submission">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Review Proposals
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
                Recent Submissions
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {recentSubmissions}
              </p>

              <Link href="student/submission">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  View Submissions
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
                Grading Pending
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {gradesDue}
              </p>

              <Link href="/feedback/${projectId"></Link>
              <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                Grade Now
              </button>

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

// return (
//   <div className="min-h-screen bg-slate-50 p-6">
//     <div className="max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold mb-6 text-slate-800">
//         Welcome, Supervisor 👨‍🏫
//       </h1>

//       <div className="grid gap-6 md:grid-cols-2">
//         {/* Total Assigned Students */}
//         <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//           <h2 className="text-2xl font-semibold text-slate-700 mb-2">
//             Assigned Students
//           </h2>
//           <p className="text-lg text-slate-800">{totalStudents}</p>
//         </div>

//         {/* Pending Proposals */}
//         <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//           <h2 className="text-2xl font-semibold text-slate-700 mb-2">
//             Pending Proposals
//           </h2>
//           <p className="text-lg text-yellow-600">{pendingProposals}</p>
//           <Link
//             href="/supervisor/proposals"
//             className="text-indigo-600 hover:underline mt-2 inline-block"
//           >
//             Review Proposals
//           </Link>
//         </div>

//         {/* Recent Submissions */}
//         <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//           <h2 className="text-2xl font-semibold text-slate-700 mb-2">
//             Recent Submissions
//           </h2>
//           <p className="text-lg text-slate-800">{recentSubmissions}</p>
//           <Link
//             href="/supervisor/submissions"
//             className="text-indigo-600 hover:underline mt-2 inline-block"
//           >
//             View Submissions
//           </Link>
//         </div>

//         {/* Grades Due */}
//         <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//           <h2 className="text-2xl font-semibold text-slate-700 mb-2">
//             Grading Pending
//           </h2>
//           <p className="text-lg text-rose-600">{gradesDue}</p>
//           <Link
//             href="/supervisor/grading"
//             className="text-indigo-600 hover:underline mt-2 inline-block"
//           >
//             Grade Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// );
