const categoriaModel = require('../Model/categoriaModel')

class categoriaController{
    async create(req, res){
        var categoria = await categoriaModel.select()
        res.render('categoria', {categoria: categoria})
    }

    async PostCreate(req, res){
        if (req.body.nome == '' || req.body.nome == undefined) {
            console.log('error')
            res.redirect('/category/')
        }else{
            categoriaModel.create(req.body.nome)
            res.redirect('/category/')
        }
    }

    async delete(req, res){
        await categoriaModel.delete(req.params.id)
        res.redirect('/category/')
    }

    async update(req, res){
        var categoria = await categoriaModel.select()
        var categ = await categoriaModel.selectOne(req.params.id)
        console.log(categoria)
        res.render('Upcategoria', {categoria: categoria, categ})
    }
    async postUpdate(req, res){
        if (req.body.nome == '' || req.body.nome == undefined) {
            res.redirect('/category/edit/'+req.params.id)
        }else{
            categoriaModel.update(req.params.id ,req.body.nome)
            res.redirect('/category/')
        }
    }
}

module.exports = new categoriaController