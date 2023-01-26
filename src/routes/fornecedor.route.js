const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedor.controller');
const verifyJWT = require('../middlewares/autorizator');
const fornecedorValidator = require('../validators/fornecedor.validator');

router.post('/',verifyJWT, fornecedorValidator.criar(), fornecedorController.create);

router.get('/',verifyJWT, fornecedorController.findAll);

router.get('/:id',verifyJWT, fornecedorValidator.encontrarPorId(),fornecedorController.findById);

router.put('/:id',verifyJWT, fornecedorValidator.atualizar(), fornecedorController.atualizar);

router.delete('/:id',verifyJWT, fornecedorValidator.deletar(), fornecedorController.deleteById);

module.exports = router;