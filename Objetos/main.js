
//Funcion sin parametro
/* function mifuncion() {
    console.log("hola");
}

//mifuncion();

//Funcion con parametro
function minuevafuncion(nombre) {
    console.log("hola " + nombre)
}
let minombre = "Mauricio";
//minuevafuncion(minombre);

function saludar(nombre){
    console.log(`hola ${nombre}`);
}

saludar("Pedro") */

//Scope - Alcance
/* function suma(num1, num2){
    return num1 + num2;
} */
/* let resultado = suma(4,6);
console.log(resultado); */
//console.log( suma (6,3) );

//VAriable global

/* let resultado = 2;

function suma(num1, num2){
    //Variable local
    resultado = num1 + num2;
   
}

console.log(resultado);
suma(5,8);
console.log(resultado); */


/* let functionAnonima = () => {
    console.log("Soy un arrow funtion")
} */

//functionAnonima ();

 let esMayorDeEdad = (edad) => {
    if (edad >= 18){
        return "Es mayor de edad";
    } else {
            return "No es mayor de edad";
        }
} 

//console.log(esMayorDeEdad(19));

 function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8) +32;
  }

  function Generar() {
    var tabla = document.getElementById('txtN1').value;
    for (var i = 0; i < 10; i++) {
        document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
    }
}

//Objetos

/* let miObjeto = {};
console.log(miObjeto);


let animales = {
    perico: "juancho",
    perro: "lupito",
    gato: "saturnino"
}

console.log(animales.gato);
 */

/*  let persona = {
     nombre: "Juan Rulfo",
     estatura: 1.67,
     peso: "102 kg",
     nacionalidad: "Mexicano",
     edad: 57,
     presentarse: function(){
         console.log(`Hola mi nombre es ${this.nombre}`);
     }

 }
console.log(persona.presentarse()); */