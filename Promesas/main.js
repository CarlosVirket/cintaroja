const request = require ("request");

/* let promise = new promise(function(resolve,reject) {
    resolve("Esta promesa se resolvio");
    reject("Esta promesa no se resolvio");

}); */

/* promise.then(onFullfiled[, onRejected]);
promise.then(function(value){

}, function(reason){

});

var = Promise.resolve(33);
var themProm = resolveProm.then(value){
    console.log("Se resolvio"+ value);
    return value;
});promise.catch(); */

/* let promesa = new Promise((resolve,reject) => {
    resolve("Esta promesa se resolvio");
   

});
console.log(promesa); */
/* console.log("Se van a imprimir los timeouts...");
setTimeout(function(){
    console.log("pasaron 2 segundos");
}, 2000);
setTimeout(function(){
    console.log("pasaron 3 segundos");
}, 3000);

console.log("Se van a imprimir los timeouts..."); */

/* let p1 = new Promise( (resolve, reject) => {
    resolve('Success!');
    // or
    // reject ("Error!");
  } );
  
  p1.then( value => {
    console.log(value); // Success!
  }, reason => {
    console.log(reason); // Error!
  } ); */
/* 
  Promise.resolve('foo')
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'bar';
        resolve(string);
      }, 1);
    });
  })
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.  
  .then(function(string) {
    console.log("Last Then:  oops... didn't bother to instantiate and return " +
                "a promise in the prior then so the sequence may be a bit " +
                "surprising");

    // Note that `string` will not have the 'baz' bit of it at this point. This 
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string);
  }); */
  /* console.log('Se resolvio la promesa');

  let promesa = new Promise( (resolve, reject) => {
    
   setTimeout( () => {
    resolve('Se resolvio la promesa');
  }, 4000);
});

  console.log(promesa);
  console.log("Se acaba de resolver la promesa");
   promesa.then(mensaje => console.log(mensaje)); */

/*    let promesa = new Promise ( (resolve, reject) => {

    let miNumero = 5;

    if(miNumero % 2 == 0){
        resolve("Si es par");
    }else reject("No es par");
    
});


   promesa
       .then(mensaje => console.log(mensaje))
       .catch(mensaje => console.log(mensaje)); */



 let promesaSWAPI = new Promise ( (resolve, reject) => {

    request.get("https://swapi.co/api/people/12/", 
        (error, response, body) => {

        response.statusCode == 200
        ? resolve(JSON.parse(body))
        :reject(error);
    });
});

promesaSWAPI
    .then( json => console.log(json) )
    .catch( error => console.log(error)); 

    let promesaPlaneta = new Promise ( (resolve, reject) => {

        request.get("https://swapi.co/api/planets/3/", 
            (error, response, body) => {
                response.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject("código de respuesta" + response.statusCode); 

                

                
    
            

             
         
        });
    });
    
   /*  promesaPlaneta
        .then( json => console.log(json.name + json.climate) )
        .catch( error => console.log(error)); */

         promesaPlaneta
        .then( json => console.log(`Nombre del Planeta: ${json.name} \nClima: ${ json.climate} \nDiametro: ${json.diameter}`) )
        .catch( error => console.log(error)); 


