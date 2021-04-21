const express = require('express')
const router = express.Router();

var multer  = require('multer')
var multerConfig  = require('../Config/multerConfig')

const categoriaController = require('../App/Controllers/articleController')

router.get('/', categoriaController.home)

router.get('/del/:id', categoriaController.delete)

router.get('/edit/:id', categoriaController.update)
router.post('/edit/:id', multer(multerConfig).single('file'), categoriaController.postUpdate)



router.get('/creat', categoriaController.create )
router.post('/creat', categoriaController.PostCreate )

module.exports = router