import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Beranda() {
  const [hitung, setHitung] = useState(() => {
    const tersimpan = localStorage.getItem('jumlah_klik');
    return tersimpan ? parseInt(tersimpan) : 0;
  });

  useEffect(() => {
    localStorage.setItem('jumlah_klik', hitung);
  }, [hitung]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-sky-400 mb-2">🏠 Beranda</h1>
      <p className="text-slate-400 text-lg mb-6">Kamu sudah mengklik sebanyak: {hitung} kali</p>
      
      <button 
        onClick={() => setHitung(hitung + 1)}
        className="bg-sky-500 hover:bg-sky-600 font-semibold px-6 py-2 rounded-lg mb-6 transition-colors shadow-lg"
      >
        Tambah Angka
      </button>
      
      <Link to="/tentang">
        <button className="bg-slate-800 text-slate-400 px-4 py-1.5 rounded-lg text-sm border border-slate-700">
          Ke Halaman Tentang
        </button>
      </Link>
    </div>
  );
}
