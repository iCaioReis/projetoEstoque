const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');
const verifyJWT = require('../middlewares/autorizator');
const usuarioValidator = require ('../validators/usuario.validator')

router.post('/', usuarioValidator.criar(), usuarioController.create);

router.post('/login', usuarioValidator.login(), usuarioController.login);

router.get('/', verifyJWT, usuarioController.findAll);

router.get('/:id', verifyJWT, usuarioValidator.findById(), usuarioController.findById);

router.put('/:id', verifyJWT, usuarioValidator.atualizar(), usuarioController.atualizar);

router.delete('/:id', verifyJWT, usuarioValidator.deleteById(), usuarioController.deleteById);

module.exports =  router;