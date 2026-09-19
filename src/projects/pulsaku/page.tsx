export default function PulsaKuPage() {
  return (
    <main className="min-h-screen bg-[#0c1a2e] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <a
          href="/#projects"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Kembali ke Projects
        </a>

        <h1 className="mt-8 text-4xl sm:text-5xl font-bold">
          PulsaKu
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Aplikasi untuk mencatat dan mengelola transaksi pulsa
          dengan lebih mudah dan terstruktur.
        </p>

        <div className="mt-10 bg-[#024950] rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Tentang Project
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Website PulsaKu dibuat untuk membantu proses pencatatan
            transaksi pulsa. Pengguna dapat mencatat data pelanggan,
            nomor HP, jenis pulsa, harga, dan waktu transaksi.
          </p>
        </div>

        <div className="mt-6 bg-[#024950] rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Teknologi
          </h2>

          <p className="mt-4 text-blue-400">
            HTML •  JavaScript • Supabase • Tailwind CSS 
          </p>
        </div>

        <div className="mt-6 bg-[#024950] rounded-2xl p-6">
          <h2 className="text-2xl font-bold">
            Fitur
          </h2>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Pencatatan transaksi</li>
            <li>• Data pelanggan</li>
            <li>• Riwayat transaksi</li>
            <li>• Pengelolaan pulsa</li>
          </ul>
        </div>

      </div>
    </main>
  );
}