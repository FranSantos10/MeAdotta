// login.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1 AND senha = $2',
      [email, senha]
    );

    if (result.rows.length > 0) {
      return res.status(200).json({ token: 'protetor-auth', email });
    } else {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
  }
});

module.exports = router;
