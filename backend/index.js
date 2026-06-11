const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')
const reembolsoController = require('./controller/reembolso.controller')

// ----------- middleware -------------------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// ------------------------------------------

// Rotas do Padrão REST para o CRUD de reembolsos
app.post('/reembolso', reembolsoController.cadastrar)
app.get('/reembolso', reembolsoController.listar)
app.get('/reembolso/:id', reembolsoController.consultar)
app.delete('/reembolso/:id', reembolsoController.apagar)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Aplicação de Reembolsos rodando!' })
})

// Sincronização do banco por ORM seguindo o estilo de tratamento por Promises (.then)
conn.sync()
.then(() => {
    app.listen(PORT, hostname, () => {
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err) => {
    console.error(`Erro ao conectar o banco de dados!`, err)
})
