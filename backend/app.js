const express = require('express');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');
const interesseRoutes = require('./routes/interesseRoutes'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/animais', animalRoutes);
app.use('/api/interesse', interesseRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
