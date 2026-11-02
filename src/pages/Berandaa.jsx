import { Link } from 'react-router-dom';

export default function Beranda() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-sky-400 mb-2">Halaman Beranda</h1>
      <p className="text-slate-400 text-lg mb-6">Selamat datang di aplikasi React</p>
      
      <Link to="/tentang">
        <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors shadow-lg">
          Pergi ke Halaman Tentang
        </button>
      </Link>
    </div>
  );
}
