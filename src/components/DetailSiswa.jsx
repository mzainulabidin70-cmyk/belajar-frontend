import { useParams, Link } from "react-router-dom";

export default function DetailSiswa() {
    const { idSiswa } = useParams();

    return (
        <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Profil Detail Siswa</h3>

            <p className="text-slate-300">
                Kamu sedang melihat data siswa dengan ID / NISN: <span className="font-mono text-white bg-slate-900 px-2 py-0.5 rounded">{idSiswa}</span>
            </p>

            <Link to="/tentang" className="text-xs text-sky-400 underline block mt-4">
                Kembali ke Halaman Tentang
            </Link>
        </div>
    );
}