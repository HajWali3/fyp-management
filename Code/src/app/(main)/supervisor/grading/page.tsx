"use client";
import Link from "next/link";

const SupervisorDashboard = () => {
  // Simulated pending grading data
  const projects = [
    {
      id: 1,
      title: "AI Research Proposal",
      student: "John Doe",
      gradeStatus: "Pending",
    },
    {
      id: 2,
      title: "Blockchain Implementation",
      student: "Jane Smith",
      gradeStatus: "Pending",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Supervisor Dashboard</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
          >
            <div>
              <h2 className="text-lg font-medium">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.student}</p>
            </div>
            <Link href={`/grading/${project.id}`}>
              <a className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                Grade
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupervisorDashboard;
