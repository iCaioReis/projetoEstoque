const db = require('../database/models/index')
const { Usuario } = require('../database/models/index')

const create = async function(usuario){
    const usuarioCriado = await Usuario.create(usuario)
    return usuarioCriado;
}

module.exports = {
    create: create,
}