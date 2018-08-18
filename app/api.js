const express = require ('express');
const bodyParser = require ("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
                    //request, response

app.get('/', function(req, res) {
    res.send('¡Hola Mundo! Bienvenido a mi página');
});

app.get('/usuarios/', function(req, res) {
    res.send('¡Estas en la página de usuarios');
});

app.post('/usuarios/', (req, res) => {
    //console.log(req.body);
    //res.send(req.body);
    /* let nuevoUsuario = req.body;
    console.log(nuevoUsuario.weigth +" " + nuevoUsuario.name);

    res
    .status(201)
    .send(nuevoUsuario); */

    
});

app.put('/usuarios/:esteEsMiId/', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    //res.status(200).send("Se actualizo usuario");


});

app.delete('/usuarios/:id/', (req, res) => {

    console.log(req.params);
    res.status(204).send(req.params);
    
});



app.listen(3000, function() {
    console.log('Api corriendo en puerto 3000');
});