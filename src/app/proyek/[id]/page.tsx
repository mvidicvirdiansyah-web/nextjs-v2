import type { Metadata } from "next";
import { createClient } from "@/lib/client";

type Props = {
  params: Promise<{ id: string }>;
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
    title: proyek?.title || "Proyek",
    description:
      proyek?.description ||
      "Detail proyek portfolio Muhammad Vidic Virdiansyah.",
  };
}

export default async function ProyekDetailPage({ params }: Props) {
  const { id } = await params;

  const supabase = createClient();

  const { data: proyek } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", id)
    .single();

  if (!proyek) {
    return (
      <main className="min-h-screen bg-[#023136] p-8 text-[#AFDDE5]">
        <h1 className="text-2xl font-bold">Proyek tidak ditemukan</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#023136] p-8 text-[#AFDDE5]">
      <h1 className="text-3xl font-bold">{proyek.title}</h1>

      <p className="mt-4">{proyek.description}</p>

      <p className="mt-4">{proyek.tech}</p>
    </main>
  );
}