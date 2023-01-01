const { body } = require ('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const criar = function (){
    return [
        body('nome', validatorMessage('Nome')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('senha', validatorMessage('Senha')).exists().bail().isString(),
    ]
}

module.exports = {
    criar: criar
}