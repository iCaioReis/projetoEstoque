const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.listen(3000, () => {console.log('Aplicação rodando na porta 3000')})