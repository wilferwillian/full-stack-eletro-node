import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
})

server.get("/produtos", (req, res) => {
    
    connection.query("SELECT * FROM produto", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

server.post("/usuarios", (req, res) => {
    const { name } = req.body;
    connection.query(`INSERT INTO usuarios(name) values ('${name}')`, (error, result) => {
        if (error) {
            res.send("Erro ao inserir o usuário")
        } else {
            res.status(201).json({ //send("Usuário cadastrado com sucesso!")
                message: "Usuário cadastrado com sucesso!"
            })
            
        }
    })
})


server.listen(3009);