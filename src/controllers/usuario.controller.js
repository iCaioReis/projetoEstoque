const { response } = require('express');
const { validationResult } = require('express-validator');
const usuarioService = require('../services/usuario.service');
const createError = require('http-errors');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.create(req.body);

        if (response && response.message) {
            throw response;
        }
        res.send(response);
    } catch (error) {
        return next(error);
    }

}

const atualizar = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.atualizar({
            nome: req.body.nome
        }, req.params.id)

        if(response && response.message){
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next (error);
    }
}

const findAll = async function (req, res) {
    try {
        const response = await usuarioService.findAll();
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

        const response = await usuarioService.findById(req.params.id);

        if (response && response.message) {
            throw response;
        }
        res.send(response)
    } catch (error) {
        next(error)
    }
}

const deleteById = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await usuarioService.deleteById(req.params.id);

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
    findById: findById,
    atualizar: atualizar,
    deleteById: deleteById
}