const express = require('express');
const usuarioController = require('../controllers/usuario.controller');
const router = express.Router();
const usarioController = require('../controllers/usuario.controller');

router.post('/', usuarioController.create);

module.exports =  router;