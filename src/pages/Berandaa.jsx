import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Beranda() {
  const [isLogin, setIsLogin] = useState(
    () => localStorage.getItem('status_login') === 'true'
  );

  const [hitung, setHitung] = useState(() => {
    const tersimpan = localStorage.getItem('jumlah_klik');
    const angka = tersimpan ? parseInt(tersimpan) : 0;

    return isNaN(angka) ? 0 : angka;
  });

  useEffect(() => {
    localStorage.setItem('jumlah_klik', hitung);
  }, [hitung]);

  const aksiLogin = () => {
    localStorage.setItem('status_login', 'true');
    setIsLogin(true);
  }

  const aksiLogout = () => {
    localStorage.removeItem('status_login');
    setIsLogin(false);
  }

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
      </button>
      <br />

      <div className="flex gap-4 mb-6">
        <button
          onClick={aksiLogin}
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-semibold"
        >
          Simulasi Login
        </button>
        <button
          onClick={aksiLogout}
          className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg font-semibold"
        >
          Simulasi Logout
        </button>
      </div>

      <p className="text-sm mb-4">
        Status Login Saat Ini: {isLogin ? '🔴 Kamu Sudah Login' : '⚪ Kamu Belum Login'}
      </p>

      <Link
        to="/tentang"
        className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-1.5 text-sm text-slate-400 transition hover:bg-slate-700"
      >
        Ke Halaman Tentang
      </Link>
      <br />

      <div className="mt-8 w-full max-w-md rounded-lg border border-dashed border-sky-500 p-4">
        <p className="mb-2 text-xs text-sky-400">
          [Wilayah Konten Anak / Outlet]
        </p>
        <Outlet />
      </div>
    </div>
  );
}
