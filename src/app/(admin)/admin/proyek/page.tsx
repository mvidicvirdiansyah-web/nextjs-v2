"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/client";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string;
};

export default function ProyekAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const supabase = createClient();

  // CEK USER LOGIN
  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("USER LOGIN:", user);
  };

  // READ
  const getProjects = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("proyek")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Gagal mengambil data:", error);
      setLoading(false);
      return;
    }

    setProjects(data || []);
    setLoading(false);
  };

  // DELETE
  const deleteProject = async (id: number) => {
    const confirmDelete = confirm(
      "Apakah kamu yakin ingin menghapus proyek ini?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("proyek")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Gagal menghapus:", error);
      alert("Gagal menghapus proyek: " + error.message);
      return;
    }

    alert("Proyek berhasil dihapus!");

    setProjects((prev) =>
      prev.filter((project) => project.id !== id)
    );
  };

  // CREATE
  const addProject = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !tech) {
      alert("Semua field harus diisi.");
      return;
    }

    setSaving(true);

    const { data, error } = await supabase
      .from("proyek")
      .insert([
        {
          title,
          description,
          tech,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Gagal menambahkan proyek:", error);
      alert("Gagal menambahkan proyek: " + error.message);
      setSaving(false);
      return;
    }

    setProjects((prev) => [...prev, data]);

    setTitle("");
    setDescription("");
    setTech("");
    setShowForm(false);
    setSaving(false);

    alert("Proyek berhasil ditambahkan!");
  };

  // EDIT
  const editProject = (project: Project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setTech(project.tech);
    setShowForm(true);
  };

  // UPDATE
  const updateProject = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !tech) {
      alert("Semua field harus diisi.");
      return;
    }

    if (editingId === null) return;

    setSaving(true);

    const { data, error } = await supabase
      .from("proyek")
      .update({
        title,
        description,
        tech,
      })
      .eq("id", editingId)
      .select()
      .single();

    if (error) {
      console.error("Gagal mengupdate proyek:", error);
      alert("Gagal mengupdate proyek: " + error.message);
      setSaving(false);
      return;
    }

    setProjects((prev) =>
      prev.map((project) =>
        project.id === editingId ? data : project
      )
    );

    setTitle("");
    setDescription("");
    setTech("");
    setEditingId(null);
    setShowForm(false);
    setSaving(false);

    alert("Proyek berhasil diupdate!");
  };

  // JALANKAN SAAT HALAMAN DIBUKA
  useEffect(() => {
    getProjects();
    checkUser();
  }, []);

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Kelola Proyek
          </h1>

          <p className="mt-2 text-gray-400">
            Tambah, edit, dan hapus proyek portfolio.
          </p>
        </div>

        <button
          onClick={() => {
            setShowForm(!showForm);

            if (showForm) {
              setEditingId(null);
              setTitle("");
              setDescription("");
              setTech("");
            }
          }}
          className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#023136] transition hover:bg-cyan-400"
        >
          {showForm ? "Tutup Form" : "+ Tambah Proyek"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <form
          onSubmit={
            editingId !== null
              ? updateProject
              : addProject
          }
          className="mb-6 rounded-2xl border border-[#17636a] bg-[#024950] p-6"
        >
          <h2 className="mb-5 text-xl font-bold">
            {editingId !== null
              ? "Edit Proyek"
              : "Tambah Proyek"}
          </h2>

          <div className="space-y-4">
            {/* Judul */}
            <div>
              <label className="mb-2 block text-sm">
                Judul Proyek
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Contoh: Laundry App"
                className="w-full rounded-lg border border-[#17636a] bg-[#023136] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label className="mb-2 block text-sm">
                Deskripsi
              </label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Deskripsi proyek..."
                rows={4}
                className="w-full rounded-lg border border-[#17636a] bg-[#023136] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            {/* Teknologi */}
            <div>
              <label className="mb-2 block text-sm">
                Teknologi
              </label>

              <input
                type="text"
                value={tech}
                onChange={(e) =>
                  setTech(e.target.value)
                }
                placeholder="Next.js • Tailwind CSS • Supabase"
                className="w-full rounded-lg border border-[#17636a] bg-[#023136] px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Tombol */}
          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-[#023136] hover:bg-cyan-400 disabled:opacity-50"
            >
              {saving
                ? "Menyimpan..."
                : editingId !== null
                ? "Update Proyek"
                : "Simpan Proyek"}
            </button>

            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
                setTitle("");
                setDescription("");
                setTech("");
              }}
              className="rounded-lg bg-gray-500/20 px-5 py-3 text-gray-300 hover:bg-gray-500/30"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-[#17636a] bg-[#024950]">
        {loading ? (
          <div className="p-8 text-center text-gray-400">
            Memuat data proyek...
          </div>
        ) : projects.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            Belum ada proyek.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-[#17636a]">
                <tr>
                  <th className="px-6 py-4">
                    Judul
                  </th>

                  <th className="px-6 py-4">
                    Deskripsi
                  </th>

                  <th className="px-6 py-4">
                    Teknologi
                  </th>

                  <th className="px-6 py-4 text-right">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-[#17636a] last:border-0"
                  >
                    <td className="px-6 py-4 font-medium">
                      {project.title}
                    </td>

                    <td className="max-w-md px-6 py-4 text-sm text-gray-400">
                      {project.description}
                    </td>

                    <td className="px-6 py-4 text-sm text-cyan-400">
                      {project.tech}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        {/* EDIT */}
                        <button
                          onClick={() =>
                            editProject(project)
                          }
                          className="rounded-lg bg-blue-500/20 px-3 py-2 text-sm text-blue-400 hover:bg-blue-500/30"
                        >
                          Edit
                        </button>

                        {/* DELETE */}
                        <button
                          onClick={() =>
                            deleteProject(project.id)
                          }
                          className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-400 hover:bg-red-500/30"
                        >
                          Hapus
                        </button>
                      </div>
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