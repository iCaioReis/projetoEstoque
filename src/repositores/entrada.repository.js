const { Entrada, Item, Usuario } = require('../database/models/index');

const criar = async function (entrada){
    const entradaCriado = await Entrada.create(entrada);
    return entradaCriado
}

const atualizar = async function(entrada, id){
    await Entrada.update(entrada, {
        where: {id: id}
    })
}

const encontrarTodos = async function(){
    const itens = await Entrada.findAll({
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }]
    });
    return itens;
}

const encontrarPorId = async function(id){
    const entrada = await Entrada.findByPk(id);
    return entrada;
}

const encontrarPorWhere = async function(where){
    const entrada = await Entrada.findOne({
        where: where
    });
    return entrada;
}

const deletar = async function(id){
    return await Entrada.destroy({
        where: { id: id },
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: Usuario,
            as: 'usuario'
        }]
    });

}

module.exports = {
    criar: criar,
    atualizar: atualizar,
    encontrarTodos: encontrarTodos,
    encontrarPorId: encontrarPorId,
    encontrarPorWhere: encontrarPorWhere,
    deletar: deletar
}