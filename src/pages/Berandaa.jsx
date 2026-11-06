import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Beranda() {
  const [hitung, setHitung] = useState(() => {
    const tersimpan = localStorage.getItem('jumlah_klik');
    const angka = tersimpan ? parseInt(tersimpan) : 0;

    return isNaN(angka) ? 0 : angka;
  });

  useEffect(() => {
    localStorage.setItem('jumlah_klik', hitung);
  }, [hitung]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4 text-white">
      <h1 className="mb-2 text-3xl font-bold text-sky-400">Beranda</h1>
      <p className="mb-6 text-lg text-slate-400">
        Kamu sudah mengklik sebanyak: {hitung} kali
      </p>

      <button
        onClick={() => setHitung(hitung + 1)}
        className="mb-6 rounded-lg bg-sky-500 px-6 py-2 font-semibold shadow-lg transition-colors hover:bg-sky-600 block"
      >
        Tambah Angka
      </button><br />

      <Link
        to="/tentang"
        className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm text-slate-400 transition hover:bg-slate-700"
      >
        Ke Halaman Tentang
      </Link><br />

      <div className="mt-8 w-full max-w-md rounded-lg border border-dashed border-sky-500 p-4">
        <p className="mb-2 text-xs text-sky-400">
          [Wilayah Konten Anak / Outlet]
        </p>
        <Outlet />
      </div>
    </div>
  );
}
