"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // Kalau login gagal
    if (error) {
      setError("Email atau password salah.");
      setLoading(false);
      return;
    }

    // Kalau login berhasil
    router.push("/doorpass");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#023136] px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#AFDDE5]">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-300">
            Masuk untuk mengelola portfolio
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-[#024950] p-6 shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-[#AFDDE5]">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg bg-[#023136] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm text-[#AFDDE5]">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg bg-[#023136] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            {/* Tombol */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-[#023136] hover:bg-cyan-400 disabled:opacity-50"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>

          {/* Kembali */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-gray-300 hover:text-cyan-400"
            >
              ← Kembali ke Portfolio
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}