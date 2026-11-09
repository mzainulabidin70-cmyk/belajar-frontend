const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ 
      success: false, 
      message: 'Email dan password tidak boleh kosong!' 
    });
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      return res.status(401).json({ 
        success: false, 
        message: 'Gagal login: Kredensial salah atau belum terdaftar.' 
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Kredensial valid, login berhasil!',
      user: data.user,
      token: data.session.access_token
    });

  } catch (err) {
    return res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan internal pada server Express.' 
    });
  }
});

app.post('/api/auth/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (authError) {
      return res.status(400).json({ success: false, message: authError.message });
    }

    const userUuid = authData.user.id;

    const { error: dbError } = await supabase
      .from('dataSiapa')
      .insert([
        {
          id: userUuid,
          email: email,
        }
      ]);

    if (dbError) {
      return res.status(400).json({ success: false, message: 'Gagal simpan ke tabel kustom: ' + dbError.message });
    }

    return res.status(201).json({
      success: true,
      message: 'Registrasi Berhasil di Auth & Tabel Kustom!',
      user: authData.user
    });

  } catch (err) {
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server Express.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server Express sukses berjalan di http://localhost:${PORT}`);
});
