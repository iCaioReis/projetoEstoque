const usuarioService = require ('../services/usuario.service');

const create = async function(req, res){
    const usuario = await usuarioService.create(req.body);
    res.send(usuario)
}

module.exports = {
    create: create
}