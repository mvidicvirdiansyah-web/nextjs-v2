import { supabase } from "@/lib/supabase";

export default async function ProyekPage() {
  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error mengambil data proyek:", error);
    return <p>Gagal mengambil data proyek.</p>;
  }

  return (
    <main className="min-h-screen bg-[#023136] px-6 py-24 text-[#AFDDE5]">
      <div className="mx-auto max-w-6xl">
        <p className="text-blue-400">MY PROJECT</p>

        <h1 className="mt-2 text-4xl font-bold">
          Project Saya
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {proyek?.map((item) => (
            <a
              key={item.id}
              href="https://nextjs-v2-a7xsv5dn5-mvidicvirdiansyah-9115s-projects.vercel.app/#projects"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-3 text-slate-400">
                {item.description}
              </p>

              <p className="mt-5 text-blue-400">
                {item.tech}
              </p>

              <p className="mt-4 text-sm text-blue-300">
                Buka Project →
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}