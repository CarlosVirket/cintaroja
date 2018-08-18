const request = require ("request");

/* request.get("http://pokeapi.co/api/v2/pokemon/100/", (error, response, body) => {
    console.log(JSON.parse(body));
}); */

/*  request.get("http://openlibrary.org/search.json?q=contemporary+moral+issues", (error, response, body) => {

   
let respuesta = JSON.parse(body)
for (let i=0; i<respuesta.docs.length; i++){
    console.log(respuesta.docs[i].author_name); 
} 
}); */

/* request.get("http://openlibrary.org/search.json?q=harry+k+girvetz", (error, response, body) => {

let respuesta = JSON.parse(body)
for (let i=0; i<respuesta.docs.length; i++){
    console.log(respuesta.docs[i].title); 
}
}); */

  request.get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-08-01&end_date=2018-08-08&api_key=LahzgPGAy8nobeM8zHAJ48doKK2vGqvr7jeLpjOQ", (error, response, body) => {
   
let respuesta = JSON.parse(body)

let near_earth_objects = respuesta.near_earth_objects

for (var key in respuesta.near_earth_objects){
    for (var i=0; i<near_earth_objects[key].length; i++){
        if ( near_earth_objects[key][i].is_potentially_hazardous_asteroid==true){
            console.log(`Nombre de asteroide: ${near_earth_objects[key][i].name}`);
        }
    }
}
 }); 

/* let obtenerPokemones = () => {
    request.get('http://pokeapi.co/api/v2/pokemon?limit=151', (error, response, body) => {
    if (response.statusCode == 200) {
        let arregloPokemosnes = JSON.parse(body).result;
        console.log(arregloPokemosnes);
       /*  arregloPokemosnes.map(pokemon => {
            request.get(pokemon.url, (error, response, body)=> {
                let miPokemon = JSON.parse(body);
                console.log(miPokemon);
            }) */
    
         /*      request.get("http://pokeapi.co/api/v2/pokemon?limit=3", (error, response, body) => {
                let respuesta = JSON.parse(body)

                for (let i=0; i<respuesta.results.length; i++){
                    console.log(respuesta.results[i].name); 
                }
              });
         */





  


    

 

 