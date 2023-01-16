const { Saida, Item, Usuario } = require('../database/models/index');

const criar = async function (saida){
    const saidaCriado = await Saida.create(saida);
    return saidaCriado
}

const atualizar = async function(saida, id){
    await Saida.update(saida, {
        where: {id: id}
    })
}

const encontrarTodos = async function(){
    const itens = await Saida.findAll({
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
    const saida = await Saida.findByPk(id);
    return saida;
}

const encontrarPorWhere = async function(where){
    const saida = await Saida.findOne({
        where: where
    });
    return saida;
}

const deletar = async function(id){
    return await Saida.destroy({
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