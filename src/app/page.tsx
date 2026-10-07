import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/client";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params;

  const supabase = createClient();

  const { data: proyek } = await supabase
    .from("proyek")
    .select("title, description")
    .eq("id", id)
    .single();

  return {
    title: proyek?.title || "Detail Proyek",
    description:
      proyek?.description ||
      "Detail project portfolio Muhammad Vidic Virdiansyah.",
  };
}

export default async function ProyekDetailPage({ params }: Props) {
  const { id } = await params;

  const supabase = createClient();

  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !proyek) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#023136] px-6 text-[#AFDDE5]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Proyek tidak ditemukan
          </h1>

          <p className="mt-3 text-slate-400">
            Project yang kamu cari tidak tersedia.
          </p>

          <Link
            href="/#projects"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            ← Kembali ke Project
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#023136] px-6 py-24 text-[#AFDDE5]">
      <div className="mx-auto max-w-4xl">

        {/* KEMBALI */}
        <Link
          href="/#projects"
          className="inline-block text-blue-400 transition hover:text-blue-300"
        >
          ← Kembali ke Project
        </Link>

        {/* DETAIL PROJECT */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#024950] p-8 shadow-xl md:p-12">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Project Detail
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            {proyek.title}
          </h1>

          <div className="mt-8 rounded-xl bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">
              Deskripsi
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              {proyek.description}
            </p>
          </div>

          <div className="mt-6 rounded-xl bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">
              Teknologi
            </h2>

            <p className="mt-4 text-blue-400">
              {proyek.tech}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}