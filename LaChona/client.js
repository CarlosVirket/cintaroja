const mongoose = require("mongoose");
let url = 'mongodb://CCamargo:america19@ds221292.mlab.com:21292/b22_basededatos_prueba';

mongoose.connect(url);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

const articuloSchema = new Schema({
    articulos:ObjectId,
    nombre:String,
    precio:Number,
    existencia:Number,
    descripcion:String
});

const ticketSchema = new Schema({
    ticket:ObjectId,
    rfc:{
        type:String,
        default:"NWM9-7092-44W4"
    },
    subtotal:{
        type:Number,
        default:0
    },
    iva:{
        type:Number,
        default:0
    },
    total:{
        type:Number,
        default:0
    },
    articulos: [{
        Type: Schema.ObjectId, type: Schema.ObjectId, type:Schema.ObjectId,
        ref:"Articulo"
    }],
    
        
});

var Articulo = mongoose.model('Articulo', articuloSchema);
var Ticket  = mongoose.model('Ticket', ticketSchema);

module.exports = {Articulo, Ticket}

