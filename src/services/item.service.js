const itemRepository = require('../repositores/item.repository');
const createError = require('http-errors');

const create = async function(item){
    const itemCriado = await itemRepository.criar(item);
    return itemCriado;
}

const atualizar = async function(item, id){
    const existeItem = await itemRepository.encontrarPorId( id );

    if(!existeItem){
        return createError(404, 'Item não encontrado!')
    }

    await itemRepository.atualizar(item, id);

    return await itemRepository.encontrarPorId(id);
}

const findAll = async function(){
    const itens = await itemRepository.encontrarTodos();
    return itens;
}

const findById = async function(id){
    const item = await itemRepository.encontrarPorId(id);
    if(!item){
        return createError(404, 'Item não encontrado');
    }
    return item;
}

const deleteById = async function(id){
    const item = await itemRepository.encontrarPorId(id);
    if(!item){
        return createError(404, 'Item não encontrado');
    }
    await itemRepository.deletar(id);
    return item;
}


module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    atualizar: atualizar,
    deleteById: deleteById
}