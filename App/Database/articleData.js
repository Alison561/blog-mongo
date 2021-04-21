const mongoose = require('mongoose')

const categoria = new mongoose.Schema({
    nome: String
})

const article = new mongoose.Schema({
    img: String,
    assunto: String,
    descricao: String,
    categorias: [categoria],
    texto: String
})

module.exports = article