const { validationResult } = require('express-validator');
const saidaService = require('../services/saida.service');
const createError = require('http-errors');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await saidaService.create({
            quantidade: req.body.quantidade,
            usuario_id: req.usuario_id,
            item_id: req.body.item_id
        });

        if(response && response.message){
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }

}

const findAll = async function (req, res) {
    try {
        const response = await saidaService.findAll();
        res.send(response);
    } catch (error) {
        next(error)
    }
}

const findById = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await saidaService.findById(req.params.id);

        if (response && response.message) {
            throw response;
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}