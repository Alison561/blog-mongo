const mongoose = require('mongoose')
const categoriaData = require('../Database/categoriaData')
const categoria = mongoose.model('categorias', categoriaData)

class categoriaModel{
    async create(nome){
       var categ = await categoria.create({nome})
       await categ.save()
    }

    async select(){
        return await categoria.find()
    }

    async selectOne(id){
        return await categoria.findOne({ _id: id })
    }

    async delete(id){
        await categoria.deleteOne({ _id: id });
    }

    async update(id, nome){
        await categoria.updateOne({ _id: id }, {nome});
    }
}

module.exports = new categoriaModel