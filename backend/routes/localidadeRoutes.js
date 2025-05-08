const express = require('express');
const router = express.Router();

const { listarEstados, listarCidades } = require('../controllers/localidadeController');

// Outras rotas...
router.get('/:estado/municipios', listarCidades);
router.get('/', listarEstados);

module.exports = router;
