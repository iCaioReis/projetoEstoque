# Comandos Utilizados para inicializar o projeto
npm init -y
npm i express body-parser sequelize mysql2
npm i --save-dev sequelize-cli 

## Estrutura de pastas
    => src
        => controllers
        => database
        => middlewares
        => repositories
        => routes
        => services
        => utils
        => validators

npm i dotenv

//Iniciar o index.js na raiz do projeto

//Criar na raiz do projeto o arquivo  .sequelizerc

//Criar o banco de dados mysql
## Na pasta Database 
npx sequelize-cli init 

//Deletar o config.json e criar um config.js
//Entrar no arquivo index.js em models e trocar o import de config.json para config.js

## Criar Migration

//Na raiz do projeto 
    npx sequelize-cli model:generate --name usuario(Nome da Tabela) --attributes login:string,senha:string (Atributos e seus tipos)

## Configurar Migration

//Colocar allowNull nos atributos necessários
//Colocar do deletedAt

deletedAt:{
    allowNull: true,
    type: Sequelize.DATE
}

=> No arquivo de models colocar o tablename

## Rodar Migrations 

npx sequelize-cli db:migrate