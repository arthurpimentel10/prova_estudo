const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Produto = require('./models/Produto')

const PORT = 3000
const hostname = 'localhost'

// Configuração express ----------------------
app.use(express.urlencoded ({extended:true}))
app.use(express.json())
app.use(express.static('public'))
// ----------------------
// Configuração express-handlebars ----------------------
app.engine ('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app
// ----------------------
// pegando páginas ----------------------
app.post('/atualizar', async(req,res)=>{
    const name = req.body.name
    await banco_estudo.comando()
    res.render('atualiza', {dados})
})

app.get('/atualizar', (req,res)=>{
    res.render('atualiza')
})



app.get('/listar', async (req,res)=>{
    const dados = await Produto.findAll({raw:true})
    console.log(dados)
    res.render('lista', {valores: dados})
})

app.get('/', (req,res)=>{
    res.render('home')
})

// ----------------------





conn.sync().then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((error)=>{
    console.log('erro')
})

