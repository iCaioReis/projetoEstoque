const usuarioRepository = require('../repositores/usuario.repository');
const createError = require('http-errors');
require('dotenv').config();
const bcrypt = require('bcrypt')
const { sign } = require ('jsonwebtoken')

const create = async function(usuario){
    const existeUsuario = await usuarioRepository.findByWhere({email: usuario.email});

    if(existeUsuario){
        return createError(409, 'Este usuário já existe!')
    }

    usuario.senha = await bcrypt.hash(usuario.senha, ~~process.env.SALT)
    const usuarioCriado = await usuarioRepository.create(usuario);
    return usuarioCriado;
}

const login = async function(usuario){
    const usuarioLogin = await usuarioRepository.findByWhere({
        email: usuario.email
    });

    if(!usuarioLogin){
        return createError(401, 'Usuário Inválido!')
    }

    const comparacaoSenha = await bcrypt.compare(usuario.senha, usuarioLogin.senha)

    if(!comparacaoSenha){
        return createError(401, 'Senha incorreta!')
    }

    const token = sign({
        id: usuarioLogin.id
    }, process.env.SECRET, {
        //expiresIn:  900000000
    })
    delete usuarioLogin.senha

    return {
        auth: true,
        usuario: usuarioLogin,
        token: token
    }
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
    deleteById: deleteById,
    login: login,
}