const multer = require('multer');
const express = require('express');
const router = express.Router();
const path = require('path');
const { listarAnimais, filtrarAnimal, cadastrarAnimal, editarAnimal, deletarAnimal } = require('../controllers/animalController');

// Configuração do armazenamento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // pasta onde as imagens serão salvas
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // nome único
  }
});

const upload = multer({ storage: storage });

// Rotas
router.get('/', listarAnimais);
router.get('/:id', filtrarAnimal);
router.put('/:id', upload.single('foto'), editarAnimal); 
router.delete('/:id', deletarAnimal);
router.post('/', upload.single('foto'), cadastrarAnimal);

module.exports = router;
