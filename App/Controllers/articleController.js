const articleModel = require('../Model/articleModel')
const categoriaModel = require('../Model/categoriaModel')
const fs = require('fs')


class articleController{

    async home(req, res){
        var article = await articleModel.select()
        res.render('homeAdmin', {article})
    }

    async create(req, res){
        var categoria = await categoriaModel.select()
        res.render('article', {categoria})
    }

    async PostCreate(req, res){
        var {assunt, desc, texto} = req.body
        var categoria = []
        req.body.categoria.forEach(e => {
            categoria.push({ nome: e})
        });
        await articleModel.create(req.file.filename, assunt, desc, texto, categoria)
        res.redirect('/article/')
    }

    async delete(req, res){
        
        await articleModel.delete(req.params.id)
        res.redirect('/article/')
    }

    async update(req, res){
        var up = await articleModel.selectOne(req.params.id)
        res.render('articleUp',{up})
    }
    async postUpdate(req, res){
        var up = await articleModel.selectOne(req.params.id)
        fs.unlink('./Public/Uploads/'+up.img, function(err){})
        var {assunt, desc, texto} = req.body
        await articleModel.update(req.params.id, req.file.filename, assunt, desc, texto)
        res.redirect('/article/')
    }
}

module.exports = new articleController