// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface FeedbackItem {
//   id: string;
//   comment: string;
//   author: string;
//   date: string;
// }

// export default function FeedbackPage() {
//   const router = useRouter();
//   const { projectId } = router.query;
//   const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([]);

//   useEffect(() => {
//     if (projectId) {
//       fetch(`/api/feedback?projectId=${projectId}`)
//         .then((res) => res.json())
//         .then((data) => setFeedbackList(data))
//         .catch((err) => console.error("Failed to fetch feedback:", err));
//     }
//   }, [projectId]);

//   return (
//     <div className="min-h-screen bg-slate-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
//         <h1 className="text-3xl font-bold mb-6 text-slate-800">
//           Project Feedback
//         </h1>

//         {feedbackList.length === 0 ? (
//           <p className="text-slate-600">No feedback available yet.</p>
//         ) : (
//           <ul className="space-y-4">
//             {feedbackList.map((fb) => (
//               <li
//                 key={fb.id}
//                 className="border-l-4 border-indigo-500 bg-slate-100 p-4 rounded-lg shadow-sm"
//               >
//                 <p className="text-slate-800 font-medium">{fb.comment}</p>
//                 <div className="text-sm text-slate-600 mt-1">
//                   — {fb.author},{" "}
//                   <span className="italic">
//                     {new Date(fb.date).toLocaleDateString()}
//                   </span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
