"use client";
import React from "react";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

export default function StudentDashboard() {
  const proposalStatus = "Approved"; // Mock status
  const assignedSupervisor = "Dr. Sarah Khan";
  const projectId = "12345";

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
                Proposal Status
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {proposalStatus}
              </p>

              <Link href="student/submit-proposal">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Submit Proposal
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
                Assigned Supervisor
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                {assignedSupervisor}
              </p>

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
                Upload Submission
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                Ready to submit your report, slides, or code?
              </p>

              <Link href="student/submission">
                <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                  Upload Files
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
                Feedback & Updates
              </h1>

              <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                Check supervisor feedback on your work.
              </p>

              <Link href="/feedback/${projectId"></Link>
              <button className="rounded-lg border border-gray-500 px-4 py-1 text-gray-300">
                View Feedback
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

// export default function StudentDashboard() {
//   const proposalStatus = "Approved"; // Mock status
//   const assignedSupervisor = "Dr. Sarah Khan";
//   const projectId = "12345";

//   return (
//     <div className="min-h-screen bg-slate-50 p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-6 text-slate-800">
//           Welcome, Student 👋
//         </h1>

//         <div className="grid gap-6 md:grid-cols-2">
//           {/* Proposal Status Card */}
//           <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//             <h2 className="text-2xl font-semibold mb-2 text-slate-700">
//               Proposal Status
//             </h2>
//             <p
//               className={`text-lg font-medium ${
//                 proposalStatus === "Approved"
//                   ? "text-emerald-600"
//                   : "text-yellow-600"
//               }`}
//             >
//               {proposalStatus}
//             </p>
//             <Link
//               href="student/submit-proposal"
//               className="text-indigo-600 hover:underline mt-3 inline-block"
//             >
//               Submit New Proposal
//             </Link>
//           </div>

//           {/* Supervisor Info Card */}
//           <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//             <h2 className="text-2xl font-semibold mb-2 text-slate-700">
//               Assigned Supervisor
//             </h2>
//             <p className="text-lg text-slate-800">
//               {assignedSupervisor || "Not Assigned Yet"}
//             </p>
//           </div>

//           {/* Upload Submission Card */}
//           <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//             <h2 className="text-2xl font-semibold mb-2 text-slate-700">
//               Upload Submission
//             </h2>
//             <p className="mb-2 text-slate-600">
//               Ready to submit your report, slides, or code?
//             </p>
//             <Link
//               href="student/submission"
//               className="text-indigo-600 hover:underline"
//             >
//               Upload Files
//             </Link>
//           </div>

//           {/* Feedback Card */}
//           <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
//             <h2 className="text-2xl font-semibold mb-2 text-slate-700">
//               Feedback & Updates
//             </h2>
//             <p className="mb-2 text-slate-600">
//               Check supervisor feedback on your work.
//             </p>
//             <Link
//               href={`/feedback/${projectId}`}
//               className="text-indigo-600 hover:underline"
//             >
//               View Feedback
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
