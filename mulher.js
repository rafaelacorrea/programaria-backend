const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Rafaela Corrêa',
        image: 'https://avatars.githubusercontent.com/u/35432817?v=4',
        minibio: 'Desenvolvedora full-stack e QA'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta);