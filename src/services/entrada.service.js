const entradaRepository = require('../repositores/entrada.repository');
const itemRepository = require('../repositores/item.repository');
const createError = require('http-errors');

const create = async function(entrada){
    const entradaCriado = await entradaRepository.criar(entrada);
    const item = await itemRepository.encontrarPorId(entrada.item_id)

    if(!item){
        return createError(404, 'Item não existe, entrada inválida!');
    }

    const quantidade = entradaCriado.quantidade + item.quantidade;

    await itemRepository.atualizar({quantidade}, item.id)

    return entradaCriado;

}

const findAll = async function(){
    const entrada = await entradaRepository.encontrarTodos();
    return entrada;
}

const findById = async function(id){
    const entrada = await entradaRepository.encontrarPorId(id);
    if(!entrada){
        return createError(404, 'Entrada não encontrada');
    }
    return entrada;
}


module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}