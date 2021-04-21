const express = require('express')
const app = express()

const blogController = require('./App/Controllers/blogController')
const categotiaRouter = require('./Routes/categoriaRouter')

const articleRouter= require('./Routes/articleRouter')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
     useUnifiedTopology: true
});

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(express.static('Public'))
app.set("views", "./App/Views")
app.set('view engine', 'ejs')

app.get('/', blogController.home)
app.get('/blog/:id', blogController.materia)

app.use('/category', categotiaRouter)
app.use('/article', articleRouter)

app.listen(3000)