const express = require('express')
const router = express.Router();

const categoriaController = require('../App/Controllers/categoriaController')

router.get('/', categoriaController.create )
router.post('/', categoriaController.PostCreate )

router.get('/del/:id', categoriaController.delete)

router.get('/edit/:id', categoriaController.update)
router.post('/edit/:id', categoriaController.postUpdate)



module.exports = router