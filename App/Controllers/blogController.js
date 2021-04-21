const categoriaModel = require('../Model/categoriaModel')
const articleModel = require('../Model/articleModel')

class blogController{

    async home(req, res){
        var article = await articleModel.select()
        res.render('home', {article})
    }
    
    async materia(req, res){
        var select = await articleModel.selectOne(req.params.id)
        res.render('materia', {select})
    }
}

module.exports = new blogController