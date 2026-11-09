import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/ButtonLogin';

export default function HalamanRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const responseText = await response.text();
      let data = {};
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch {
        data = { message: responseText };
      }

      if (response.ok && data.success) {
        alert('Registrasi Sukses! Silakan login.');
        navigate('/');
      } else {
        alert(data.message || 'Registrasi gagal.');
      }
    } catch (error) {
      alert(`Gagal mengirim permintaan registrasi: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white border border-gray-100 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">Create Account</h2>
        <p className="text-sm text-center text-gray-500 mb-6">Daftar akun full-stack pertama Anda</p>
        
        <form onSubmit={handleRegisterSubmit}>
          <Input label="Email Address" type="email" placeholder="masukkan email baru" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" disabled={loading} text={loading ? 'Mendaftarkan...' : 'Daftar Sekarang'} />
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Sudah punya akun? <Link to="/" className="text-emerald-600 font-semibold hover:underline">Login di sini</Link>
        </p>
      </div>
    </div>
  );
}
