const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



require('./models/comentarios');
const Comentario= mongoose.model("comentarios");

require('./models/produtos');
const Produto= mongoose.model("produtos");

require('./Database/connect');

server.use(express.json());
server.use(cors());
server.use(bodyParser.urlencoded({extended:true}))


server.get("/produtos",async (req, res) => {
    
    const  produtoResponse = await Produto.find();
    const produtoJson = await produtoResponse;
    return res.json(produtoJson)
});

server.get("/mostrar",async (req, res) => {
    
    const  comentarioResponse = await Comentario.find();
    const comentarioJson = await comentarioResponse;
    return res.json(comentarioJson)
});

server.post("/comentarios",async (req, res) => {
   const novoComentario = new Comentario({
        nome: req.body.nome,
        msg: req.body.msg
   })
   const result = await novoComentario.save();
   res.send(result)
})


server.listen(3009);