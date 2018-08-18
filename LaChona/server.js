const express = require('express');
const bodyParser = require('body-parser');

const {
    Articulo,
    Ticket
} = require('./client.js')

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Estoy funcionando, si sirvo :D');
});


app.post('/api/v1/articulo', (req, res)=>{
    const {nombre, precio, existencia, descripcion}=req.body;
    let nuevoArticulo = Articulo ({
        nombre,
        precio,
        existencia,
        descripcion
    });

    nuevoArticulo.save((req, art)=>{
        res.status(201).send(art);
    }); 

});

app.post('/api/v1/ticket', (req, res)=>{
    const {rfc, subtotal, iva, total, articulo}=req.body;
    let nuevoTicket=Ticket({
        rfc,
        subtotal,
        iva,
        total,
        articulo
    });
    nuevoTicket.save((err,tic)=>{
        res.status(201).send(tic);
    });
});

app.get('/api/v1/ticket', (req, res)=>{
    Ticket.find({},(err, ticket)=>{
        Articulo.populate(ticket,{path:'articulo'},(err,result)=>{
            res.send(result);
        });
    });
});

    


app.listen(5000, ()=> console.log('Server on port 5000'));