const express = require('express');
const bodyParser = require('body-parser');

const {
    Modelo,
    Cerveza
} = require('./tiposcerveza')

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Estoy funcionando, si sirvo :D');
});

app.post('/api/v1/cerveza', (req, res)=>{
    const {tipo, estilo}=req.body;
    let nuevoCerveza = Cerveza ({
        tipo,
        estilo
    });

    nuevoCerveza.save((req, pr)=>{
        res.status(201).send(pr);
    }); 
    
});

app.post('/api/v1/modelo', (req, res)=>{
    const {nombre, color, sabor, pais, grados, cerveza}=req.body;
    let nuevoModelo=Modelo({
        nombre,
        color,
        sabor,
        pais,
        grados,
        pais,
        cerveza
    });
    nuevoModelo.save((err,modelo)=>{
        res.status(201).send(modelo);
    });
});

//Get todos los alumnos

app.get('/api/v1/modelo', (req, res)=>{
    Modelo.find({},(err, modelos)=>{
        Cerveza.populate(modelos,{path:'cerveza'},(err,result)=>{
            res.send(result);
        });
    });
});



app.listen(9000, ()=> console.log('Server on port 9000'));