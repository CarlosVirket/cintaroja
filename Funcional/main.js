//Pradigma Funcional - Se arma solo con funciones (no librerías, etc) 

/* function triple(numero){
    return numero*3;
}
console.log(triple(6)); */

/* let triple = function(numero){
    return numero * 3;
}

console.log(triple(4)); */

//Función de Orden Superior
// Función callback

/* let funcionDeOrdenSuperior = function (callback){
  //  console.log("Hola soy la función de orden superior");
    callback();
}

let funcionCallback = function (){
    console.log("Hola soy la función callback")
}
 */
//funcionDeOrdenSuperior(funcionCallback);














/* let ordenSuperior = function(saludar){
    console.log("Hola, soy la funcion de orden superior");
    saludar();
} */

/* let callback = function(){
    console.log("Soy la funcion CallBack");
}

//ordenSuperior(callback)

let miFuncion = (callback) => {
    console.log("Soy la funcion CallBack");
    callback()
}

miFuncion (  ()=> {
    console.log("Soy la funcion CallBack");
}); */


/* let saluda = (mensaje, formato) => {
    formato(mensaje);

}

let minusculas = (mensaje) =>{
    console.log(mensaje.toLowerCase());
}

let mayusculas = (mensaje) =>{
    console.log(mensaje.toUpperCase());
}

saluda("Hola A Todos", mayusculas) */

//Filter (filtro)

/*  let animales = [
    {nombre: "Heladio", especie:"Tortuga"},
    {nombre: "José", especie: "Tigre"},
    {nombre: "Carlos", especie: "Cuyo"},
    {nombre: "Raúl", especie: "Períco"},
    {nombre: "Juan", especie: "Tortuga"},
    {nombre: "Ricardo", especie: "Tigre"},
    {nombre: "Alfredo", especie: "Cuyo"},
    {nombre: "Eugenio", especie: "Pato"}
]; */

/* let cuyos = [];

 for (let i=0; i<animales.length; i++){
    if (animales[i].especie == "Cuyo"){
        cuyos.push(animales[i]);
    }
}
console.log(cuyos); 

  let esCuyo => {return animal.especie == "Cuyo"}
  let esTortuga => {return animal.especie == "Tortuga"}

/*   cuyos = animales.filter( animal => {
    return animal.especie == "Tortuga";  

}); */

//console.log(cuyos); */


//Map 

/* let animales = [
    {nombre: "Heladio", especie:"Tortuga"},
    {nombre: "José", especie: "Tigre"},
    {nombre: "Carlos", especie: "Cuyo"},
    {nombre: "Raúl", especie: "Períco"},
    {nombre: "Juan", especie: "Tortuga"},
    {nombre: "Ricardo", especie: "Tigre"},
    {nombre: "Alfredo", especie: "Cuyo"},
    {nombre: "Eugenio", especie: "Pato"}
]; */

/* let patos = [];

/* for (let i=0; i<animales.length; i++){
    if (animales[i].especie == "Pato"){
        patos.push(animales[i].nombre);

    }
} */
/* 
patos = animales.map (function (animal){
    return animal.nombre;
});

console.log(patos); */ 

let tiempo = [
    {minutos: 120, horas: "2 horas"},
    {minutos: 80, horas: "1 hora con 20 minutos"},
    {minutos: 200, horas: "3 horas con 20 minutos "},
    {minutos: 100, horas: "1 hora con 40 minutos"}

]
let valor = []
let multiplicar = function(numeros){
if (numeros.valor * 7){
   
}for (let i=0; i>valor.length; i++){
    valor.push(valor[i]);

}
}

    multiplicar (function(valor){
        return valor.multiplicar;

    })
    


console.log(multiplicar());