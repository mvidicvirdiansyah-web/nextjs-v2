export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0c1a2e] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <a
          href="/"
          className="text-blue-400 hover:text-blue-300"
        >
          ← Kembali
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Portfolio Website
        </h1>

        <p className="mt-4 text-gray-400">
          Website portfolio pribadi untuk menampilkan informasi,
          kemampuan, dan project yang saya buat.
        </p>

        <div className="mt-10 rounded-2xl bg-[#024950] p-6">
          <h2 className="text-2xl font-bold">
            Tentang Project
          </h2>

          <p className="mt-4 text-gray-300 leading-7">
            Website portfolio ini dibuat menggunakan Next.js
            dengan desain responsive sehingga dapat digunakan
            pada desktop maupun perangkat mobile.
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-[#024950] p-6">
          <h2 className="text-2xl font-bold">
            Teknologi
          </h2>

          <p className="mt-4 text-blue-400">
            Next.js • React • TypeScript • Tailwind CSS
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-[#024950] p-6">
          <h2 className="text-2xl font-bold">
            Fitur
          </h2>

          <ul className="mt-4 space-y-2 text-gray-300">
            <li>• Responsive Design</li>
            <li>• About Me</li>
            <li>• Skills</li>
            <li>• Projects</li>
            <li>• Contact</li>
          </ul>
        </div>

      </div>
    </main>
  );
}