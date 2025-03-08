"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await fetch("/api/auth/user");

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const data = await response.json();
        setUsername(data.username);
      } catch (error) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    getUserInfo();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-500">
          Hello {username}!
        </h1>
        <p className="mb-6 text-gray-500">Welcome to SecureConnect</p>

        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
