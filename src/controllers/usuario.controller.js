const { response } = require('express');
const usuarioService = require('../services/usuario.service');

const create = async function (req, res, next) {
    try {
        const response = await usuarioService.create(req.body);
        
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
        const response = await usuarioService.findAll();
        res.send(response);
    } catch (error) {
        next(error)
    }
}

const findById = async function (req, res) {
    try {
        const response = await usuarioService.findById(req.params.id);
        
        if(response && response.message) {
            throw response;
        }
        res.send(response)
    }catch (error){
        next(error)
    }
}


module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}