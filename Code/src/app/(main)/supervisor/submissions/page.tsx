// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const ViewSubmissions = () => {
//   const router = useRouter();
//   const { projectId } = router.query; // Get the projectId from URL
//   const [submissions, setSubmissions] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     // Fetch submissions from the API when projectId is available
//     if (projectId) {
//       fetch(`/api/submissions?projectId=${projectId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setSubmissions(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching submissions:", error);
//           setLoading(false);
//         });
//     }
//   }, [projectId]);

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-xl font-semibold">Project Submissions</h1>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="space-y-4">
//           {submissions.length === 0 ? (
//             <div>No submissions yet.</div>
//           ) : (
//             submissions.map((submission) => (
//               <div
//                 key={submission._id}
//                 className="p-4 border rounded-lg shadow-sm"
//               >
//                 <h2 className="font-semibold text-lg">{submission.fileName}</h2>
//                 <p className="text-sm text-gray-500">
//                   Submitted on:{" "}
//                   {new Date(submission.timestamp).toLocaleString()}
//                 </p>
//                 <p className="text-sm">Type: {submission.fileType}</p>
//                 <p className="text-sm">Status: {submission.status}</p>
//                 <a
//                   href={submission.fileUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 mt-2 inline-block"
//                 >
//                   Download File
//                 </a>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewSubmissions;
