/* let request = require ("request");

let URL_BASE = "https://goodreads-devf-aaron.herokuapp.com";
//Definir promesa que encapsule petición
/* let crearUsuario = new Promise ( (resolve, reject) => {

    let URI = "/api/v1/authors/";
    let URL = URL_BASE + URI;
    let jsonSend = {
        "name": "Juan",
        "last_name": "Rulfo",
        "nacionalidad": "MX",
        "biography": "El señor nacion en",
        "gender": "M",
        "age": 65
    }


    

    //Crear petición tipo post usando modulo request
    request.post({url:URL, formData: jsonSend}, (error, response, body) =>{
        response.statusCode == 201
        ? resolve(JSON.parse(body))
        : reject(error); 

    });

    
});

crearUsuario
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error)); */

    /* let editUsuario = new Promise ( (resolve, reject) => {

        let URI = "/api/v1/authors/1071/";
        let URL = URL_BASE + URI;
        let jsonSend = {
            "name": "Roberto",
            "last_name": "Rodríguez",
            "nacionalidad": "MX",
            "biography": "El señor nacio en España",
            "gender": "M",
            "age": 90
        }
    
    
        
    
        //Crear petición tipo post usando modulo request
        request.put({url:URL, formData: jsonSend}, (error, response, body) =>{
           // console.log(response.statusCode);
            response.statusCode == 200 
            ? resolve(JSON.parse(body))
            : reject(error); 
    
        });
    
        
    });
    
    editUsuario
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error)); */

        /* let parcialUsuario = new Promise ( (resolve, reject) => {

            let URI = "/api/v1/authors/1071/";
            let URL = URL_BASE + URI;
            let jsonSend = {
                "name": "Luis",
                "biography": "El señor nacio en España, año 1928",
                
                
            }
        
        
            
        
            //Crear petición tipo post usando modulo request
            request.patch({url:URL, formData: jsonSend}, (error, response, body) =>{
               // console.log(response.statusCode);
                response.statusCode == 200 
                ? resolve(JSON.parse(body))
                : reject(error); 
        
            });
        
            
        });
        
        parcialUsuario
            .then(respuesta => console.log(respuesta))
            .catch(error => console.log(error)); */

            /*  let borrarUsuario = new Promise ( (resolve, reject) => {

                let URI = "/api/v1/authors/1071/";
                let URL = URL_BASE + URI;
                let jsonSend = {
                    "name": "Roberto",
                    "last_name": "Rodríguez",
                    "nacionalidad": "MX",
                    "biography": "El señor nacio en España",
                    "gender": "M",
                    "age": 90
                    
                    
                }
            
            
                
            
                //Crear petición tipo post usando modulo request
                request.patch({url:URL}, (error, response, body) =>{
                    console.log(response.statusCode);
                    response.statusCode == 204 
                    ? resolve(JSON.parse(body))
                    : reject(error); 
            
                });
            
                
            });
            
            borrarUsuario
                .then(respuesta => console.log(respuesta))
                .catch(error => console.log(error));  */ 

                // CRUD de Goodreads
const request = require('request')
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/'


// Create
function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var urlFinal = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: urlFinal, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201
                ? resolve(json)
                : reject('Error al crear un nuevo autor')
        })
    })
}

// Read
function readAuthor(id) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(urlendpoint2, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject("Error en GET")
        });
    });
}

// Update
function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject) => {
        request.put({ url: urlendpoint2, form: jsonUpdate }, (error, response, body) => {
            response.statusCode == 200
                ? resolve(JSON.parse(body))
                : reject("Error en update")
        });
    });
}

// Delete
function deleteAuthor(id) {
    const URI = `authors/${id}/`;
    var urlendpoint3 = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.delete(urlendpoint3, (error, response, body) => {
            response.statusCode == 204
                ? resolve("El autor se eliminó exitosamente")
                : reject("Error en DELETE");
        });
    });
}

// Ejecutar promesa para eliminar un autor por ID
/* eliminarAuthor(1158)
     .then(autor=>console.log(autor))
     .catch(error =>console.log(error)) */

// Obtener un autor y modificarlo en la misma promesa
/* readAuthor(1144)
    .then( 
        json => {
            console.log(json);
            updateAuthor(
                "20000", 
                "mollyUpdate", 
                "loquitaUpdate",  
                "MX", 
                "le gustan las chelas y los tacos", 
                "F", 
                "3" 
            ).then( jsonActualizado => console.log(jsonActualizado) )
             //.catch ( error => console.log(error)) 
        }
    )
    .catch( error => console.log(error)); */


                