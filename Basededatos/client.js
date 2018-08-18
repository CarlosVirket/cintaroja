const mongoose = require("mongoose");
let url = 'mongodb://CCamargo:america19@ds221292.mlab.com:21292/b22_basededatos_prueba';

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const programaSchema = new Schema({
    programa:ObjectId,
    descripcion:String,
    duracion:String
});

const alumnoSchema = new Schema({
    alumno:ObjectId,
    nombre:String,
    apellido:String,
    edad: Number,
    programa:{
        type: Schema.ObjectId,
        ref:'Programa'
     }
    
});

var Alumno = mongoose.model('Alumno', alumnoSchema);
var Programa = mongoose.model('Programa', programaSchema);

module.exports = {Alumno, Programa}