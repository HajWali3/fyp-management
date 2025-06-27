"use client";

import axios from "axios";
import { JSX, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  UserIcon,
  MailIcon,
  BriefcaseIcon,
  BookOpenIcon,
  UserCircleIcon,
  ArrowLeftIcon,
} from "lucide-react"; // install lucide-react

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

export default function StudentPage() {
  const [student, setStudent] = useState<Student | null>(null);
  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`/api/users/students/${id}`);
        if (res.status === 200) {
          setStudent(res.data);
        } else {
          console.error("Failed to fetch student data");
        }
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };

    fetchStudent();
  }, [id]);

  if (!student) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading student details...</p>
      </div>
    );
  }

  return (
    <div className=" pt-36 ">
      <div className="min-h-screen bg-black text-white px-4 py-10 flex justify-center items-start">
        <div className="w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-blue-400">
              {student.role} Profile
            </h1>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition"
            >
              <ArrowLeftIcon size={18} />
              Back
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 gap-6 text-base">
            <InfoRow
              icon={<UserIcon size={20} />}
              label="Full Name"
              value={student.fullname || "Not provided"}
            />
            <InfoRow
              icon={<UserCircleIcon size={20} />}
              label="Username"
              value={student.username}
            />
            <InfoRow
              icon={<MailIcon size={20} />}
              label="Email"
              value={student.email}
            />
            <InfoRow
              icon={<BriefcaseIcon size={20} />}
              label="Role"
              value={student.role}
            />
            <InfoRow
              icon={<BookOpenIcon size={20} />}
              label="Project Title"
              value={student.project?.title || "Not assigned"}
            />
            <InfoRow
              icon={<UserCircleIcon size={20} />}
              label="Supervisor"
              value={student.supervisor?.name || "Not assigned"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable info row component
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-gray-800 pb-3">
      <div className="text-blue-400">{icon}</div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-lg font-medium text-white">{value}</span>
      </div>
    </div>
  );
}
