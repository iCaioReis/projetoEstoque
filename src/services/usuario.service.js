const usuarioRepository = require('../repositores/usuario.repository');
require('dotenv').config();
const bcrypt = require('bcrypt')

const create = async function(usuario){
    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const findAll = async function(){
    const usuarios = await usuarioRepository.findAll();
    return usuarios;
}

const findById = async function(id){
    const usuario = await usuarioRepository.findById(id);
    return usuario;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}