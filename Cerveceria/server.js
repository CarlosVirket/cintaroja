const express = require('express');
const bodyParser = require('body-parser');

const {
    Estilo,
    Cheve
} = require('./client.js')

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Estoy funcionando, si sirvo :D');
});

app.post('/api/v1/estilo', (req, res)=>{
    const {nombre, descripcion}=req.body;
    let nuevoEstilo = Estilo ({
        nombre,
        descripcion
    });

    nuevoEstilo.save((req, estilo)=>{
        res.status(201).send(estilo);
    }); 
    
});

app.post('/api/v1/cheve', (req, res)=>{
    const {nombre, pais, grados, cantidad, estilo}=req.body;
    let nuevoCheve=Cheve({
        nombre,
        pais,
        grados,
        cantidad,
        estilo
    });
    nuevoCheve.save((err,cheve)=>{
        res.status(201).send(cheve);
    });
});



app.get('/api/v1/cheve', (req, res)=>{
    Cheve.find({},(err, cheves)=>{
        Estilo.populate(cheves,{path:'estilo'},(err,result)=>{
            res.send(result);
        });
    });
});


app.listen(9000, ()=> console.log('Server on port 9000'));