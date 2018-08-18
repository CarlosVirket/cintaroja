/* let miObjeto = {
    texto: "hola",
    numero: 20,
    arreglo: [1,2,3],
    booleano: true,
    objeto: {perro: "fido",
    funcion: function(),
    console.log
}
}; */

 let sueldo_base = 50000;
let tarifa = 200;
let horas_extra = 4;

function calcularSueldo(sueldo, horas, tarifa){
    return sueldo + (horas * tarifa);
}

/* let resultado = calcularSueldo(sueldo_base, horas_extra, tarifa);
console.log(resultado);  */

//Paradigma Orientado a Objetos

/* let empleado = {
    sueldo_base: 50000,
    tarifa: 200,
    horas_extra: 4,
    calcularSueldo: function(){
        return this.sueldo_base + (this.horas_extra * this.tarifa)
    }
}

console.log(empleado.calcularSueldo()); */

/* let triangulo = {
    base: 5,
    altura: 5,
    calcularPerimetro: function(){
        return (this.altura * 2) + this.base
    },
    calcularArea: function(){    
          return (this.base * this.altura) /2
    }
}
console.log(triangulo.calcularPerimetro());
console.log(triangulo.calcularArea());

let cuadrado = {
    base: 5,
    altura: 5,
    calcularPerimetro: function(){
        return (this.altura * 2) + (this.base * 2)
    },
    calcularArea: function(){    
          return this.base * this.altura
    }
}
console.log(cuadrado.calcularPerimetro());
console.log(cuadrado.calcularArea());

let rectangulo = {
    base: 7,
    altura: 5,
    calcularPerimetro: function(){
        return (this.altura * 2) + (this.base * 2)
    },
    calcularArea: function(){    
          return this.base * this.altura
    }
}
console.log(rectangulo.calcularPerimetro());
console.log(rectangulo.calcularArea()); */

// Clases empiezan con mayúsculas

/* class Perro {
    constructor (nombre, raza, edad, color){
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.color = color;

    }

    ladrar(){
        return "woof woof woof";
    }

    comer(comida){
        return `${this.nombre} esta comiendo ${comida}`
    }
}

let ayudanteDeSanta = new Perro("Ayudante de Santa", "Galgo", 7, "Cafe");
console.log(ayudanteDeSanta.comer("croquetas"));

//Abstracción, Encapsulamiento, Polimorfismo, Herencia

let fido = new Perro("fido", "pitbull", 4, "blanco");
console.log(fido.comer("tacos")); */

//Ejercicio

/* class Persona {
    constructor (nombre, edad, sexo, peso, altura){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;

    }

    calcularIMC(){
        return (this.peso / (this.altura*this.altura))
    }

    esMayorDeEsdad(){
        if (this.edad < 18){
            return "Es menor de edad";
        }else return "Es mayor de edad";

    }

    calcularRFC(){
       return this.rfc = this.nombre + this.edad + this.sexo;
    }

}

    let roberto = new Persona("Roberto", 37, "H", 90, 1.85);
    console.log(roberto.rfc);
    console.log(roberto.calcularRFC());
    console.log(roberto.calcularRFC()); */


   /*  class Cuenta {
        constructor (titular, cantidad){
            this.titular = titular;
            this.cantidad = cantidad;
        }

        depositar(nuevaCantidad);
            if (this.cantidad + depositoNuevo > 900){
                return "Sobre pasaste limite";
            }else return "Estas dentro del limite";

        }
           let ramiro = new Cuenta("Ramiro", 500);
           console.log(ramiro.deposito(900))
    
    } */