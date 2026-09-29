"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DoorPassPage() {
  const router = useRouter();

  const [doorPass, setDoorPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ganti dengan DoorPass yang kamu inginkan
    const DOORPASS = "123456";

    if (doorPass === DOORPASS) {
      router.push("/admin/dashboard");
    } else {
      setError("DoorPass salah.");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#023136] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#AFDDE5]">
            DoorPass Admin
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Masukkan DoorPass untuk melanjutkan
          </p>
        </div>

        <div className="rounded-2xl bg-[#024950] p-6 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-[#AFDDE5]">
                DoorPass
              </label>

              <input
                type="password"
                value={doorPass}
                onChange={(e) => setDoorPass(e.target.value)}
                placeholder="Masukkan DoorPass"
                required
                className="w-full rounded-lg bg-[#023136] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-[#023136] hover:bg-cyan-400"
            >
              Verifikasi
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}