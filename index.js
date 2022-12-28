require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const handle404Error = require('./src/middlewares/handle404Error')
const app = express()

const itemRoute = require('./src/routes/item.route')
const usuarioRoute = require('./src/routes/usuario.route')
const handleError = require('./src/middlewares/handleErro')

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/api/usuario', usuarioRoute)
app.use('/api/itens', itemRoute)
app.use(handle404Error)
app.use(handleError)
 
app.listen(process.env.PORT, () => {console.log('Aplicação rodando na porta 3000')}) 