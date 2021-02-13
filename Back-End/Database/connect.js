const mongoose =require('mongoose');

function connect() {
    
    mongoose
    .connect('mongodb://localhost/Fullstackeletro',{
        useMongoClient:true,useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(()=>{
    console.log("Mongo conectado...")
    })
    .catch((err)=>{
    console.log("Erro a se conectar"+err)
    });
    }
mongoose.Promise = global.Promise;

module.exports = connect();