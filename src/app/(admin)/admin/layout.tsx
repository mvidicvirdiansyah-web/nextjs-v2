import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#023136] text-[#AFDDE5]">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-[#17636a] bg-[#024950] md:block">
          <div className="p-6">
            <h1 className="text-xl font-bold">
              MV Portfolio
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Admin Panel
            </p>
          </div>

          <nav className="px-4">
            <Link
              href="/admin"
              className="mb-2 block rounded-lg px-4 py-3 transition hover:bg-[#023136]"
            >
              Dashboard
            </Link>

            <Link
              href="/admin/proyek"
              className="mb-2 block rounded-lg px-4 py-3 transition hover:bg-[#023136]"
            >
              Proyek
            </Link>
          </nav>

          <div className="absolute bottom-0 w-64 border-t border-[#17636a] p-4">
            <Link
              href="/"
              className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-[#023136] hover:text-cyan-400"
            >
              ← Kembali ke Portfolio
            </Link>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}