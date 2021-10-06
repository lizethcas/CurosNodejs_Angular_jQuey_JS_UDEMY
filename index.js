
 'use strict'
 var mongoose = require("mongoose");
 mongoose.Promise = global.Promise;
 mongoose.connect("mongodb://localhost:27017/portafolio ")
           .then(() => {
              console.log("conexion a base de datos establecida con exito..");
                })
           .catch(err => console.log(err));


    