const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const router = express.Router();
const usarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.create);

router.get('/', usuarioController.findAll);

router.get('/:id', usuarioController.findById);

module.exports =  router;