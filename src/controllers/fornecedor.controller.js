const { validationResult } = require('express-validator');
const fornecedorService = require('../services/fornecedor.service');
const createError = require('http-errors');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, { errors: errors.array() })
        }

        const response = await fornecedorService.criar({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
        });

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

        const response = await fornecedorService.atualizar({
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
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
        const response = await fornecedorService.encontrarTodos();
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

        const response = await fornecedorService.encontrarPorId(req.params.id);

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

        const response = await fornecedorService.deletar(req.params.id);

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