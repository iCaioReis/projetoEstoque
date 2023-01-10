const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const verifyJWT = require('../middlewares/autorizator');
const itemValidator = require('../validators/item.validator');

router.post('/',verifyJWT, itemValidator.criar(), itemController.create);

router.get('/',verifyJWT, itemController.findAll);

router.get('/:id',verifyJWT, itemValidator.encontrarPorId(),itemController.findById);

router.put('/:id',verifyJWT, itemValidator.atualizar(), itemController.atualizar);

router.delete('/:id',verifyJWT, itemValidator.deletar(), itemController.deleteById);

module.exports = router;