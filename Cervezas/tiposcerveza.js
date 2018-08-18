const mongoose = require("mongoose");
let url = 'mongodb://CCamargo:america19@ds221292.mlab.com:21292/b22_basededatos_prueba';

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const cervezaSchema = new Schema({
    cerveza:ObjectId,
    tipo:String,
    estilo:String
});

const modeloSchema = new Schema({
    modelo:ObjectId,
    nombre:String,
    color:String,
    sabor:String,
    pais:String,
    grados: Number,
    cervezas:{
        type: Schema.ObjectId,
        ref:'Cerveza'
     }
    
});

var Modelo = mongoose.model('Modelo', modeloSchema);
var Cerveza = mongoose.model('Cerveza', cervezaSchema);

module.exports = {Modelo, Cerveza}