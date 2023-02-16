# API REST-Full Estoque
    => Projeto criado para fins de estudo onde foi feita uma API REST-Full usando node, express, mySql como principais tecnologias.

Estrutura do projeto

## ./index.js => Arquivo raiz do projeto que starta o servidor

index.js declara as rotas e utiliza os arquivos do diretório  ./src/routes

## ./src/routes => Declara rotas mais detalhadas e seus tipos (Get, Post, Delete...)

A camada de rotas utiliza da camada de controlador (controller) e validadores (validators) e o middleware autorizator

    => Autorizator: Camada responsável por validar se o usuário está ou não logado
    => Validator: Camada responsável por validar se as informações enviadas do front-end estão "corretas"
    => Controller: Camada de regra de negócios, onde são feitas validações e tratamento de dados e manda informações para camada services

A camada de services por sua vez também faz suas validações e utiliza da camada de repository

Passado então por todas as camadas, a camada de repository realiza a operação da rota, utilizando a camada de models
