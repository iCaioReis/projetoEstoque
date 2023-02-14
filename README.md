# projetoEstoque

Estrutura do projeto

## ./index.js => Arquivo raiz do projeto que starta o servidor

index.js declara as rotas e utiliza os arquivos do diretório  ./src/routes

## ./src/routes => Declara rotas mais detalhadas e seus tipos (Get, Post, Delete...)

A camada de rotas utiliza da camada de controlador (controller) e validadores (validators) e o middleware autorizator

    => Autorizator: Camada responsável por validar se o usuário está ou não logado

