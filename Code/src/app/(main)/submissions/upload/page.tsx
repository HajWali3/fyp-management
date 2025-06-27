"use client";
import React, { useState } from "react";

export default function UploadFilesPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files) return;
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    setUploading(true);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Files uploaded successfully!");
        setFiles(null);
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          Upload Submission Files
        </h1>
        <input
          type="file"
          multiple
          className="mb-4"
          onChange={handleFileChange}
        />

        <button
          onClick={handleUpload}
          disabled={uploading || !files?.length}
          className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Files"}
        </button>

        {files && files.length > 0 && (
          <ul className="mt-4 text-slate-700 list-disc list-inside">
            {Array.from(files).map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
