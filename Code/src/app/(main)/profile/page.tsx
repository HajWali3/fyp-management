"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("Loading...");
  const [username, setUsername] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [role, setRole] = useState("Loading...");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/users/aboutme");
      const userData = res.data.data;

      setId(userData._id);
      setUsername(userData.username);
      setFullname(userData.fullname);
      setEmail(userData.email);
      setRole(userData.role);
      setLoading(false);
    } catch (error: any) {
      console.error(error.message);
      toast.error("Failed to load user profile.");
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/users/logout");
      toast.success("User logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Logout failed.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className=" pt-20 ">
      <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10 text-white">
        <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center">👤 User Profile</h1>

          {loading ? (
            <p className="text-center text-gray-400">Loading user data...</p>
          ) : (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Name</p>
                <p className="text-lg font-semibold">{fullname}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Username</p>
                <p className="text-lg font-semibold">{username}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-semibold">{email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Role</p>
                <p className="text-lg font-semibold capitalize">{role}</p>
              </div>
            </div>
          )}

          <button
            onClick={logout}
            className="w-full py-2 mt-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition duration-200"
          >
            🔒 Logout
          </button>
        </div>
      </div>
    </div>
  );
}
