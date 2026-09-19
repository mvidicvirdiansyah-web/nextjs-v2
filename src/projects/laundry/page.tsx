export default function LaundryPage() {
  return (
    <main className="min-h-screen bg-[#023136] px-6 py-24 text-[#AFDDE5]">
      <div className="mx-auto max-w-5xl">

        <p className="text-blue-400">
          MY PROJECT
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          Sistem Laundry
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
          Sistem Laundry adalah website yang dibuat untuk membantu
          mengelola data pelanggan, layanan laundry, dan transaksi
          laundry secara lebih mudah dan terorganisir.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">
            <h2 className="text-2xl font-bold">
              Fitur
            </h2>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>• Data pelanggan</li>
              <li>• Data layanan laundry</li>
              <li>• Data transaksi</li>
              <li>• Status laundry</li>
              <li>• Pengelolaan transaksi laundry</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-7">
            <h2 className="text-2xl font-bold">
              Teknologi
            </h2>

            <p className="mt-5 text-slate-400">
              Next.js • React • Tailwind CSS • Supabase
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900 p-7">
          <h2 className="text-2xl font-bold">
            Tentang Project
          </h2>

          <p className="mt-4 leading-relaxed text-slate-400">
            Project ini dibuat sebagai sistem informasi laundry
            yang dapat digunakan untuk menyimpan dan mengelola
            informasi pelanggan serta transaksi laundry.
            Data project menggunakan Supabase sebagai database.
          </p>
        </div>

      </div>
    </main>
  );
}