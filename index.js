const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// template engine
app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

//body-parser

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    Post.findAll({order:[['id','DESC']]}).then((posts)=>res.render('home',{posts:posts}))
})


app.get("/cadastro",(req,res)=>res.render('form'))

app.post("/add",(req,res)=>{
  Post.create({
      titulo:req.body.titulo,
      conteudo: req.body.conteudo
  }).then(function () {
      res.redirect('/')
  }).catch((e)=> res.send(`Houve um erro:  ${e}`))
})

app.listen(4041, function (params) {
    console.log('Executando o servidor no http://localhost:4041');
})