const mongoose = require('mongoose')
const articleData = require('../Database/articleData')
const article = mongoose.model('article', articleData)

class articleModel{
    async create(img, assunto, descricao, texto, categorias){
       var artigo = await article.create({img, assunto, descricao, texto, categorias})
       await artigo.save()
    }

    async select(){
        return await article.find()
    }

    async selectOne(id){
        return await article.findOne({ _id: id })
    }

    async delete(id){
        await article.deleteOne({ _id: id });
    }

    async update(id, img, assunto, descricao, texto){
        await article.updateOne({ _id: id }, {img, assunto, descricao, texto});
    }
}

module.exports = new articleModel