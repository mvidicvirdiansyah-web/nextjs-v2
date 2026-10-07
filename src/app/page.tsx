"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Proyek = {
  id: number;
  title: string;
  description: string;
  tech: string;
};

export default function Home() {
  const [proyek, setProyek] = useState<Proyek[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProyek = async () => {
      const { data, error } = await supabase
        .from("proyek")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Gagal mengambil data proyek:", error);
      } else {
        setProyek(data || []);
      }

      setLoading(false);
    };

    getProyek();
  }, []);

  return (
    <main className="min-h-screen bg-[#023136] text-[#AFDDE5]">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#023136]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold text-[#AFDDE5]"
          >
            MyPortfolio
          </Link>

          <div className="hidden gap-6 md:flex">
            <a
              href="#home"
              className="transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Admin
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-lg text-blue-400">
              Halo, saya
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Muhammad Vidic Virdiansyah
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-blue-400 md:text-3xl">
              Web Developer
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-slate-300">
              Saya adalah seorang Web Developer yang tertarik
              dalam membuat website modern, responsif, dan
              mudah digunakan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Lihat Project
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-[#AFDDE5]/30 px-6 py-3 font-semibold transition hover:bg-[#024950]"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-[#AFDDE5]/20 md:h-96 md:w-96">
              <Image
                src="/profil.png"
                alt="Profil Muhammad Vidic Virdiansyah"
                width={400}
                height={400}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Tentang Saya
          </h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#024950] p-8">
            <p className="leading-relaxed text-slate-300">
              Saya merupakan seorang Web Developer yang
              memiliki ketertarikan pada pengembangan website
              menggunakan teknologi modern. Saya terus belajar
              dan mengembangkan kemampuan dalam membuat website
              yang memiliki tampilan menarik serta pengalaman
              pengguna yang baik.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="bg-[#024950]/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Kemampuan Saya
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Skill
              title="HTML"
              description="Membuat struktur website yang terorganisir dan semantik."
            />

            <Skill
              title="CSS"
              description="Membuat tampilan website yang menarik dan responsif."
            />

            <Skill
              title="JavaScript"
              description="Membuat website menjadi interaktif dan dinamis."
            />

            <Skill
              title="React"
              description="Membangun antarmuka website menggunakan component."
            />

            <Skill
              title="Next.js"
              description="Mengembangkan website modern menggunakan Next.js."
            />

            <Skill
              title="Tailwind CSS"
              description="Membuat desain website dengan utility-first CSS."
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            My Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Project Saya
          </h2>

          <p className="mt-4 max-w-2xl text-slate-300">
            Berikut beberapa project yang telah saya buat.
            Klik project untuk melihat detailnya.
          </p>

          {loading ? (
            <div className="mt-10 text-slate-400">
              Memuat project...
            </div>
          ) : proyek.length === 0 ? (
            <div className="mt-10 rounded-xl border border-white/10 bg-[#024950] p-6">
              Belum ada project.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {proyek.map((item) => (
                <Project
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  tech={item.tech}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#024950]/40 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Hubungi Saya
          </h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#024950] p-8">
            <p className="leading-relaxed text-slate-300">
              Jika ingin menghubungi saya atau berdiskusi
              mengenai project, silakan gunakan kontak yang
              tersedia.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="mailto:vidicvirdiansyah@gmail.com"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Email Saya
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Muhammad Vidic
            Virdiansyah. All rights reserved.
          </p>

          <Link
            href="/login"
            className="transition hover:text-blue-400"
          >
            Admin Panel
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   SKILL COMPONENT
========================= */

function Skill({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#024950] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40">
      <h3 className="text-xl font-bold text-blue-400">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-300">
        {description}
      </p>
    </div>
  );
}

/* =========================
   PROJECT COMPONENT
========================= */

function Project({
  id,
  title,
  description,
  tech,
}: {
  id: number;
  title: string;
  description: string;
  tech: string;
}) {
  return (
    <Link
      href={`/proyek/${id}`}
      className="group block"
    >
      <article className="h-full rounded-2xl border border-white/10 bg-[#024950] p-6 transition duration-300 group-hover:-translate-y-2 group-hover:border-blue-400/50 group-hover:shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Project
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-relaxed text-slate-300">
          {description}
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-blue-400">
            Teknologi
          </p>

          <p className="mt-2 text-sm text-slate-300">
            {tech}
          </p>
        </div>

        <div className="mt-6 font-semibold text-blue-400 transition group-hover:text-blue-300">
          Lihat detail project →
        </div>
      </article>
    </Link>
  );
}