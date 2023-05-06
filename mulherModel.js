const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({ //Estamos definindo um objeto
    nome: {
        type: String,                      // Definimos qual o tipo do dado da propriedade. Ex: testo ou número.
        required: true                     // Definimos se o campo é obrigatório ou não. true = obrigatório, false = opcional.
    },
    imagem: {
        type: String,
        required: true
    },
    citacao: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('diva', MulherSchema) //Exportamos a função mongoose.model()