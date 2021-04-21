const mongoose = require('mongoose')

const categoria = new mongoose.Schema({
    nome: String
})

module.exports = categoria