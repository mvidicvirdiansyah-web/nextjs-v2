import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#023136] px-6 text-[#AFDDE5]">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Halaman Tidak Ditemukan
        </h2>

        <p className="mt-4 text-slate-400">
          Maaf, halaman yang kamu cari tidak tersedia.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}