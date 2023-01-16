const saidaRepository = require('../repositores/saida.repository');
const itemRepository = require('../repositores/item.repository');
const createError = require('http-errors');

const create = async function(saida){
    const item = await itemRepository.encontrarPorId(saida.item_id);

    if(!item){
        return createError(404, 'Item não existe, saida inválida!');
    }

    const quantidade = item.quantidade - saida.quantidade;

    if(quantidade < 0){
        return createError(400, 'Saldo insuficiente para operação ');
    }
    const saidaCriado = await saidaRepository.criar(saida);
    await itemRepository.atualizar({quantidade}, item.id)
    return saidaCriado;

}

const findAll = async function(){
    const saida = await saidaRepository.encontrarTodos();
    return saida;
}

const findById = async function(id){
    const saida = await saidaRepository.encontrarPorId(id);
    if(!saida){
        return createError(404, 'Saida não encontrada');
    }
    return saida;
}


module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}