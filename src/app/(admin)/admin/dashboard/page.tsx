"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/client";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string;
};

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const getProjects = async () => {
      const { data, error } = await supabase
        .from("proyek")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error(
          "Gagal mengambil data proyek:",
          error
        );

        setLoading(false);
        return;
      }

      setProjects(data || []);
      setLoading(false);
    };

    getProjects();
  }, []);

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-gray-400">
          Selamat datang di Admin Panel Portfolio.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-[#17636a] bg-[#024950] p-6">
          <p className="text-sm text-gray-400">
            Total Proyek
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {projects.length}
          </h2>
        </div>

        <div className="rounded-2xl border border-[#17636a] bg-[#024950] p-6">
          <p className="text-sm text-gray-400">
            Status
          </p>

          <h2 className="mt-2 text-xl font-semibold text-green-400">
            Online
          </h2>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-8 rounded-2xl border border-[#17636a] bg-[#024950] p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Proyek Terbaru
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Data proyek portfolio kamu.
            </p>
          </div>

          <a
            href="/admin/proyek"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-[#023136] transition hover:bg-cyan-400"
          >
            Kelola Proyek
          </a>
        </div>

        {loading ? (
          <p className="py-6 text-center text-gray-400">
            Memuat data proyek...
          </p>
        ) : projects.length === 0 ? (
          <p className="py-6 text-center text-gray-400">
            Belum ada proyek.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-[#17636a]">
                <tr>
                  <th className="px-4 py-3">
                    Proyek
                  </th>

                  <th className="px-4 py-3">
                    Teknologi
                  </th>

                  <th className="px-4 py-3">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-[#17636a] last:border-0"
                  >
                    <td className="px-4 py-4">
                      {project.title}
                    </td>

                    <td className="px-4 py-4 text-gray-400">
                      {project.tech}
                    </td>

                    <td className="px-4 py-4 text-green-400">
                      Aktif
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}