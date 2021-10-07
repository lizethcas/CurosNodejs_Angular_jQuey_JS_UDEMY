'use strict'

var express =require ('express')
var bodyParser = require ('body-parser');


var app =express();
var project_routes = require ("./routes/project")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas
app.use("/api",project_routes);

//exportar variable app
module.exports = app;
