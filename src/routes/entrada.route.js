const express = require('express');
const router = express.Router();
const entradaController = require('../controllers/entrada.controller');
const verifyJWT = require('../middlewares/autorizator');
const entradaValidator = require('../validators/entrada.validator');

router.post('/',verifyJWT, entradaValidator.criar(), entradaController.create);

router.get('/',verifyJWT, entradaController.findAll);

router.get('/:id',verifyJWT, entradaValidator.encontrarPorId(),entradaController.findById);

module.exports = router;