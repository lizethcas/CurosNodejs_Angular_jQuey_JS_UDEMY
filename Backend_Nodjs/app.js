'use strict'

var express =require ('express')
var bodyParser = require ('body-parser');

<<<<<<< HEAD

var app =express();
var project_routes = require ("./routes/project")
=======
var app =express();

>>>>>>> 8c14f72de5ea83824ac7b53ff863c21ac8edde0f
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas
<<<<<<< HEAD
app.use("/api",project_routes);

//exportar variable app
=======

app.get("/prueba", (req,res) =>{
   res.status(200).send({
       mesagge: "Hola mundo desde API de NodeJS"
   })
})



>>>>>>> 8c14f72de5ea83824ac7b53ff863c21ac8edde0f
module.exports = app;
