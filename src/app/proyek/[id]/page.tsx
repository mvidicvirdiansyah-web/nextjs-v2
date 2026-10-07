import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/client";

type Props = {
  params: Promise<{ id: string }>;
};

// ===============================
// SEO METADATA DINAMIS
// ===============================
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
    title: proyek?.title || "Proyek",
    description:
      proyek?.description ||
      "Detail proyek portfolio Muhammad Vidic Virdiansyah.",
  };
}

// ===============================
// HALAMAN DETAIL
// ===============================
export default async function ProyekDetailPage({ params }: Props) {
  const { id } = await params;

  const supabase = createClient();

  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  // Jika proyek tidak ditemukan
  if (error || !proyek) {
    return (
      <main className="min-h-screen bg-[#023136] px-6 py-12 text-[#AFDDE5]">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/#projects"
            className="mb-8 inline-block text-blue-400 transition hover:underline"
          >
            ← Kembali ke Projects
          </Link>

          <div className="rounded-2xl bg-[#024950] p-8">
            <h1 className="text-3xl font-bold">
              Proyek tidak ditemukan
            </h1>

            <p className="mt-4 text-[#AFDDE5]/80">
              Proyek yang kamu cari tidak tersedia.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#023136] px-6 py-12 text-[#AFDDE5]">
      <div className="mx-auto max-w-4xl">

        {/* Tombol kembali */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center text-blue-400 transition hover:underline"
        >
          ← Kembali ke Projects
        </Link>

        {/* Detail proyek */}
        <div className="overflow-hidden rounded-2xl border border-[#AFDDE5]/20 bg-[#024950] shadow-xl">

          {/* Bagian gambar */}
          <div className="flex h-64 items-center justify-center bg-[#10182f]">
            <div className="text-7xl">
              💻
            </div>
          </div>

          {/* Isi */}
          <div className="p-8">

            <h1 className="text-4xl font-bold">
              {proyek.title}
            </h1>

            <div className="mt-6">
              <h2 className="text-xl font-semibold">
                Deskripsi
              </h2>

              <p className="mt-3 text-lg leading-relaxed text-[#AFDDE5]/80">
                {proyek.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold">
                Teknologi
              </h2>

              <p className="mt-3 text-lg text-blue-400">
                {proyek.tech}
              </p>
            </div>

            {/* ID proyek */}
            <div className="mt-8 border-t border-[#AFDDE5]/20 pt-6">
              <p className="text-sm text-[#AFDDE5]/60">
                Project ID: {proyek.id}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}