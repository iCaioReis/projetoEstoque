const usuarioRepository = require('../repositores/usuario.repository');

const create = async function(usuario){
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