import { Link } from 'react-router-dom';

export default function Tentang() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-emerald-400 mb-2">Halaman Tentang</h1>
      <p className="text-slate-400 text-lg mb-6">Aplikasi ini dibuat berdasarkan instruksi dari pembimbing PKL.</p>

      <Link to="/siswa/1">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg text-center block">
          Lihat Detail Siswa
        </button>
      </Link>

      <Link to="/" className="bg-emerald-500 text-white px-6 py-2 rounded-lg text-center block">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
