const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect(process.env.MONGO_URL) //Pegando as credenciais de conexão com o MongoDB através do .env

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch (erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados