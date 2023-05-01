const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Rafaela Corrêa',
        imagem: 'https://avatars.githubusercontent.com/u/35432817?v=4',
        minibio: 'Desenvolvedora full-stack e QA'
    },
    {
        nome: 'Maoly Serrano',
        imagem: 'https://avatars.githubusercontent.com/u/35432817?v=4',
        minibio: 'Desenvolvedora full-stack e QA'
    },
    {
        nome: 'Camila Melanie',
        imagem: 'https://avatars.githubusercontent.com/u/35432817?v=4',
        minibio: 'Desenvolvedora full-stack e QA'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta);