"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export default function GantiPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState("");

  const handleGantiPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setPesan("");
    setError("");

    if (!passwordBaru || !konfirmasiPassword) {
      setError("Semua field harus diisi.");
      return;
    }

    if (passwordBaru.length < 6) {
      setError("Password baru minimal 6 karakter.");
      return;
    }

    if (passwordBaru !== konfirmasiPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: passwordBaru,
    });

    if (error) {
      setError("Gagal mengganti password: " + error.message);
      setLoading(false);
      return;
    }

    setPesan("Password berhasil diganti!");

    setPasswordBaru("");
    setKonfirmasiPassword("");
    setLoading(false);

    // Kembali ke halaman login setelah berhasil
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#023136] p-6 text-[#AFDDE5] md:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Ganti Password
        </h1>

        <p className="mt-2 text-gray-400">
          Ganti password akun admin kamu.
        </p>
      </div>

      <div className="max-w-xl rounded-2xl border border-[#17636a] bg-[#024950] p-6">
        <form onSubmit={handleGantiPassword}>
          {/* Password Baru */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">
              Password Baru
            </label>

            <input
              type="password"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              placeholder="Masukkan password baru"
              required
              className="w-full rounded-lg border border-[#17636a] bg-[#023136] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Konfirmasi Password */}
          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium">
              Konfirmasi Password Baru
            </label>

            <input
              type="password"
              value={konfirmasiPassword}
              onChange={(e) =>
                setKonfirmasiPassword(e.target.value)
              }
              placeholder="Masukkan kembali password baru"
              required
              className="w-full rounded-lg border border-[#17636a] bg-[#023136] px-4 py-3 outline-none focus:border-cyan-400"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Berhasil */}
          {pesan && (
            <div className="mb-5 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
              {pesan}
              <br />
              Mengarahkan ke halaman login...
            </div>
          )}

          {/* Tombol */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#023136] transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Mengganti Password..."
              : "Ganti Password"}
          </button>
        </form>
      </div>
    </div>
  );
}