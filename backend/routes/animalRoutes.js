const express = require('express');
const router = express.Router();
const { listarAnimais, cadastrarAnimal, filtrarAnimal } = require('../controllers/animalController');

router.get('/', listarAnimais);
router.post('/', cadastrarAnimal);
router.get('/:id', filtrarAnimal);

module.exports = router;
