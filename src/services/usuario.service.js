const usuarioRepository = require('../repositores/usuario.repository');
const createError = require('http-errors');
require('dotenv').config();
const bcrypt = require('bcrypt')

const create = async function(usuario){
    const existeUsuario = await usuarioRepository.findByWhere({email: usuario.email});

    if(existeUsuario){
        return createError(409, 'Este usuário já existe!')
    }

    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const atualizar = async function(usuario, id){
    const existeUsuario = await usuarioRepository.findById( id );

    if(!existeUsuario){
        return createError(404, 'Usuário não encontrado!')
    }

    await usuarioRepository.atualizar(usuario, id);

    return await usuarioRepository.findById(id);
}

const findAll = async function(){
    const usuarios = await usuarioRepository.findAll();
    return usuarios;
}

const findById = async function(id){
    const usuario = await usuarioRepository.findById(id);
    if(!usuario){
        return createError(404, 'Usuário não encontrado');
    }
    return usuario;
}

const deleteById = async function(id){
    const usuario = await usuarioRepository.findById(id);
    if(!usuario){
        return createError(404, 'Usuário não encontrado');
    }
    await usuarioRepository.deleteById(id);
    return usuario;
}


module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    atualizar: atualizar,
    deleteById: deleteById
}