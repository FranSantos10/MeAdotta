const express = require('express');
const router = express.Router();
const { listarAnimais } = require('../controllers/animalController');

router.get('/', listarAnimais);

module.exports = router;
