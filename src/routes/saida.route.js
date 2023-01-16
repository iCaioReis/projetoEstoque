const express = require('express');
const router = express.Router();
const saidaController = require('../controllers/saida.controller');
const verifyJWT = require('../middlewares/autorizator');
const saidaValidator = require('../validators/saida.validator');

router.post('/',verifyJWT, saidaValidator.criar(), saidaController.create);

router.get('/',verifyJWT, saidaController.findAll);

router.get('/:id',verifyJWT, saidaValidator.encontrarPorId(),saidaController.findById);

module.exports = router;