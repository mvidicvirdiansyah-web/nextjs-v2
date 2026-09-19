
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#023136] text-[#AFDDE5]">

      {/* = NAVBAR  */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#024950]/90 backdrop-blur-md">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          {/* LOGO */}
          <a
            href="#home"
            className="text-2xl font-bold"
          >
            Vidic<span className="text-blue-400">.</span>
          </a>


          {/* MENU DESKTOP */}
          <div className="hidden gap-8 md:flex">

            <a
              href="#home"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-300 transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-300 transition hover:text-blue-400"
            >
              Contact
            </a>

          </div>


          {/* TOMBOL HAMBURGER - HP */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#024950] px-6 py-5 md:hidden">

            <div className="flex flex-col gap-5">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 transition hover:text-blue-400"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </nav>


      {/*  HERO =*/}
     <section
  id="home"
  className="flex min-h-screen w-full items-center overflow-hidden px-6 pt-24"
>
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* KIRI */}
          <div className="min-w-0">

            <p className="mb-4 text-lg font-medium text-[#28787A]">
              Halo, saya
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Muhammad
              <span className="block text-blue-500">
                Vidic Virdiansyah
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
              Web Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Saya adalah seorang web developer yang memiliki
              ketertarikan dalam membuat website modern,
              responsive, dan mudah digunakan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
              >
                Lihat Project →
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-400"
              >
                Hubungi Saya
              </a>

            </div>

          </div>


          {/* FOTO */}
          <div className="flex justify-center">

            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 shadow-2xl shadow-blue-500/10 sm:h-72 sm:w-72 md:h-96 md:w-96">

              <div className="flex h-52 w-52 items-center justify-center overflow-hidden rounded-full bg-slate-800 sm:h-60 sm:w-60 md:h-80 md:w-80">

                <Image
                  src="/profil.png"
                  alt="Profil Muhammad Vidic Virdiansyah"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT  */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-blue-400">
            ABOUT ME
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Tentang Saya
          </h2>

          <div className="mt-8 max-w-3xl">

            <p className="text-lg leading-relaxed text-slate-400">
              Saya sedang mengembangkan kemampuan di bidang
              teknologi dan pemrograman. Saya senang mempelajari
              teknologi baru dan membuat berbagai project website
              untuk meningkatkan kemampuan saya.
            </p>

          </div>

        </div>

      </section>


      {/*  SKILLS */}
      <section
        id="skills"
        className="bg-slate-900/50 px-6 py-24"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-blue-400">
            MY SKILLS
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Keahlian Saya
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="Next.js" />
            <Skill name="Tailwind CSS" />

          </div>

        </div>

      </section>


      {/*  PROJECTS */}
     {/*  PROJECTS */}
<section
  id="projects"
  className="px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <p className="text-blue-400">
      MY PROJECTS
    </p>

    <h2 className="mt-2 text-4xl font-bold">
      Project Saya
    </h2>

    <div className="mt-10 grid gap-6 md:grid-cols-3">

      <Project
        title="PulsaKu"
        description="Aplikasi untuk mengelola transaksi penjualan pulsa."
        tech="Next.js • Tailwind CSS • MySQL"
      />

      <Project
        title="Portfolio Website"
        description="Website portfolio pribadi yang dibuat menggunakan Next.js."
        tech="Next.js • React • Tailwind CSS"
      />

      <a
        href="https://nextjs-v2-a7xsv5dn5-mvidicvirdiansyah-9115s-projects.vercel.app/#projects"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500/50"
      >
        <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-slate-800 text-5xl">
          🧺
        </div>

        <h3 className="text-2xl font-bold">
          Sistem Laundry
        </h3>

        <p className="mt-3 leading-relaxed text-slate-400">
          Website untuk mengelola data pelanggan dan transaksi laundry.
        </p>

        <p className="mt-5 text-sm text-blue-400">
          Next.js • Supabase
        </p>
      </a>

    </div>
  </div>

</section>

      {/*  CONTACT  */}
      <section
        id="contact"
        className="border-t border-white/10 bg-slate-900/50 px-6 py-24"
      >

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-blue-400">
            CONTACT
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Mari Terhubung
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-slate-400">
            Jika kamu ingin berdiskusi tentang project,
            teknologi, atau hal lainnya, silakan hubungi saya.
          </p>

          <a
            href="mailto:mvidicvirdiansyah@gmail.com"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
          >
            Email Saya
          </a>

        </div>

      </section>


      {/*  FOOTER  */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-slate-500">

        <p>
          © 2026 Muhammad Vidic Virdiansyah. All rights reserved.
        </p>

      </footer>

    </main>
  );
}


/* COMPONENT SKILL  */

function Skill({ name }: { name: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">

      <h3 className="text-xl font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Technology
      </p>

    </div>
  );
}


/*  COMPONENT PROJECT */

function Project({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-slate-900 p-7 transition hover:-translate-y-2 hover:border-blue-500/50">

      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-slate-800 text-5xl">
        💻
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-400">
        {description}
      </p>

      <p className="mt-5 text-sm text-blue-400">
        {tech}
      </p>

    </div>
  );
}

