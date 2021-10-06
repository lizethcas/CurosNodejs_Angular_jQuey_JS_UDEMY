'use strict'

var express =require ('express')
var bodyParser = require ('body-parser');

var app =express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas

app.get("/prueba", (req,res) =>{
   res.status(200).send({
       mesagge: "Hola mundo desde API de NodeJS"
   })
})



module.exports = app;
