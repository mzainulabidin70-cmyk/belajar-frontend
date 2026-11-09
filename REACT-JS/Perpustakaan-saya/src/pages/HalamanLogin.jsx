import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/ButtonLogin';

export default function HalamanLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Login Berhasil!');
        localStorage.setItem('userToken', data.token);
        navigate('/dashboard'); // Langsung redirect menggunakan hook router
      } else {
        alert(data.message || 'Kredensial salah.');
      }
    } catch (error) {
      alert('Gagal terhubung ke backend Express!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white border border-gray-100 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={handleLoginSubmit}>
          <Input label="Email Address" type="email" placeholder="masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" disabled={loading} text={loading ? 'Memverifikasi...' : 'Masuk Sekarang'} />
        </form>
		<p className="text-sm text-center text-gray-600 mt-4">
          Belum punya akun?{' '}
          <Link to="/registrasi" className="text-emerald-600 font-semibold hover:underline">
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
