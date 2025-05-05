const express = require('express');
const router = express.Router();

const { cadastrarInteresse, listarInteresses } = require('../controllers/interesseController');

// Outras rotas...
router.post('/', cadastrarInteresse);
router.get('/', listarInteresses);

module.exports = router;
