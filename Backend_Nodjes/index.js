
 'use strict'
 var mongoose = require("mongoose");
 var app = require('./app');
 var port = 3700;
 mongoose.Promise = global.Promise;
 mongoose.connect("mongodb://localhost:27017/portafolio ")
           .then(() => {
              console.log("conexion a base de datos establecida con exito..");

              app.listen(port, () => {
                console.log("Servidor corriendo correctamente con NodeJS");
              });
                })
           .catch(err => console.log(err));


    