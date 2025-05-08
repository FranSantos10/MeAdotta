const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { email, senha } = req.body;

  // Simulação de protetor
  if (email === 'franci.santos.silva10@gmail.com' && senha === '123456' ||
    email === 'protetor@gmail.com' && senha === '123456'
  ) {
    return res.status(200).json({ token: 'protetor-auth',  email: email }); // pode usar JWT depois
  } else {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
});


module.exports = router;
