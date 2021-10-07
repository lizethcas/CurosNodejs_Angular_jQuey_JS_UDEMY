 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;

 var ProjectSchema = Schema({
     name: string,
     description: string,
     category: string,
     year: Number,
     langs:[String]
 });


 module.exports = mongoose.model("project", ProjectSchema);