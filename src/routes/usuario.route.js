const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const usuarioValidator = require ('../validators/usuario.validator')

router.post('/', usuarioValidator.criar(), usuarioController.create);

router.get('/', usuarioController.findAll);

router.get('/:id', usuarioValidator.findById(), usuarioController.findById);

router.put('/:id', usuarioValidator.atualizar(), usuarioController.atualizar);

module.exports =  router;