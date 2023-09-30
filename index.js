const express = require('express');
const bodyparser  = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(express.static(`${__dirname}/public`));

app.listen(3001, ()=> console.log("Servidor na porta 3002"));

app.get("/", (request,response)=>{
    response.send("Ola estou aqui ")
})