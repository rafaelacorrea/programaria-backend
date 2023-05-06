const express = require("express") // iniciando o express
const router = express.Router() //configurando a primeira parte da rota
const cors = require('cors') //estou trazendo o pacote cors que permite consumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados') //aqui estou ligando ao arquivo bancoDeDados
conectaBancoDeDados() //estou chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel')

const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 //aqui estou criando a porta

//GET
async function mostraMulheres(request, response) { //Quando precisamos falar com um serviço externo, estamos lidando com JavaScript assíncrono. Logo a função precisa conter a sintaxe de async.
    try {
        //Criamos a constante que vai guardar os dados. Criamos a função find() para se comunicar com o banco de dados e ler os dados.
        const mulheresVindasDoBancoDeDados = await Mulher.find() //Como estamos falando com MongoDB, precisamos usar o await
        
        response.json(mulheresVindasDoBancoDeDados)
    } catch (erro) { //Como o MongoDB é um serviço externo e as chances de falha são maiores, usamos também a sintaxe de try/catch.
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    //Constante que vai guardar os dados quando uma requisição de novo objeto for criada.
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save() //Criamos a função save() para se comunicar com o banco de dados e salvar os dados.
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.name) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada = request.body.imagem
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }

        if (request.body.citacao) {
            mulherEncontrada.minibio = request.body.citacao
        }

        const mulherATualizadaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherATualizadaNoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
    
}

//DELETE
async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id) //Criamos a função que serve para encontrar um objeto pelo id e deletar o objeto
        response.json({ mensagem: 'Mulher deletada com sucesso!'})
    } catch (erro) {
        console.log(erro)
    }
    
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) //configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota DELETE /mulheres

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.listen(porta, mostraPorta); //servidor ouvindo a porta