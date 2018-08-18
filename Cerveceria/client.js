const mongoose = require("mongoose");
let url = 'mongodb://CCamargo:america19@ds221292.mlab.com:21292/b22_basededatos_prueba';

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const estiloSchema = new Schema({
    estilo:ObjectId,
    nombre:String,
    descripcion:String
});

const cheveSchema = new Schema({
    cheve:ObjectId,
    nombre:String,
    pais:String,
    grados:Number,
    cantidad:Number,
    estilo: {
        type:Schema.ObjectId,
        ref:"Estilo"
    }
});

var Cheve = mongoose.model('Cheve', cheveSchema);
var Estilo  = mongoose.model('Estilo', estiloSchema);

module.exports = {Cheve, Estilo}