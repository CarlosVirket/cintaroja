/* 
class Animal {


    constructor(nombre, peso){
        this.nombre = nombre
        this.peso = peso
        console.log("Se creo Animal;")

    }

    getNombre(){
        return this.nombre
    }

    comer(comida){
        return `Mi animal esta comiendo ${comida}`
    }
}

class Perro extends Animal {

    constructor(nombre,peso,raza,color){
        super(nombre, peso)
        this.raza = raza
        this.color = color
        console.log("Se creo un perro")
    }

    ladra(){
        return "woof woof"
    }
}

const pug = new Perro("Solovino","12kg","Pug","Beige")

console.log(
    pug.getNombre()
);

console.log(pug.ladra()) */

/* class pug extends Perro{

    constructor(nombre,peso,raza,color,altura){
        super(nombre,peso,raza,color)
        this.altura = altura
    }
} */

/* 
class Largometraje {
    constructor(tiempo){
        this.tiempo = tiempo
    }
    getTiempo(){
        return this.tiempo;
    }
}

class Pelicula extends Largometraje{
    constructor(tiempo,genero){
        super(tiempo)
        this.genero = genero
    }
}

class Documental extends Largometraje {
    constructor(tiempo, director){
    super(tiempo)
    this.director = director
    }

}

class Cine{
    constructor(largometraje){
        this.largometraje = largometraje
    }

    reproducir(){
        return `Reproduciendo ...... ${this.largometraje.getTiempo()}`;
    }
}

let doc = new Documental("90 min", "Pedro Tovar")
let peli = new Pelicula("120 min", "Accion")

let sala1 = new Cine(doc);
let sala2 = new Cine(peli);

console.log(sala1.reproducir());
console.log(sala2.reproducir()); */


/* class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto
        this.ancho = ancho

    }

    getAncho(){
        return this.ancho;
    }

    getAlto(){
        return this.alto;
    }

    setAncho(nuevoAncho){
        this.ancho = nuevoAncho
    }

    setAlto(nuevoAlto){
        this.alto = nuevoAlto
    }

    calcularArea(){
        return this.ancho*this.alto
    }
}

let rect = new Rectangulo(12,45);
console.log(rect.calcularArea())


class Cuadrado extends Rectangulo{
    constructor(lado,lado1){
        super(lado,lado1)
    }
} */


/* class Figura {
    constructor(ladoA, ladoB){
        this.ladoA = ladoA
        this.ladoB = ladoB
    }

    calcularArea(){
        if(this.ladoA == this.ladoB){
            return this.ladoA*this.ladoA
        }else{
            return this.ladoA*this.ladoB
        }
    }
}

class Rectangulo extends Figura{
    constructor(alto,ancho){
        super(alto,ancho)
    }
}

class Cuadrado extends Figura{
    constructor(lado){
        super(lado,lado)
    }
}

let cuadrado1 = new Cuadrado(12);
let rect = new Rectangulo(20,50);

console.log(cuadrado1.calcularArea())
console.log(rect.calcularArea()) */

 /* class Electrodomestico {
    constructor(peso,color,consumoenergetico){
        this.peso = peso
        this.color = color
        this.consumoenergetico = consumoenergetico
        this.precio = 0
    }
 

 }
   

class Lavadora extends Electrodomestico {
    constructor(peso,color,consumoenergetico,carga){
    super(peso,color,consumoenergetico)
    this.carga = carga

    }

    getCarga(){
        return this.carga;
    }

    getConsumoenergetico(){
        return this.consumoenergetico
    }
    
    calcularCosto (){
        this.precio = this.carga*this.consumoenergetico
        return this.precio
    }
     
}

let lav = new Lavadora ("34 kg", "Blanca", 20, 13)
console.log(lav.calcularCosto())
console.log(lav.precio) */
 class Construccion{
    constructor(numpuerta,numventanas,numpiso,altura,largo,ancho){
        this.numpuerta = numpuerta
        this.numventanas = numventanas
        this.numpiso = numpiso
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
        this.direccion = 0
    }
    getLargo(){
        return this.largo
    }

    getAncho(){
        return this.ancho
    }
    
    calcularMcuadrados (){
        return this.largo*this.ancho
    }

    cambiarDireccion (nuevaDir){
        this.direccion = nuevaDir
        return this.direccion
    }
}

class Casa extends Construccion{
    constructor(numpuerta,numventanas,numpiso,direccion,altura,largo,ancho){
        super(numpuerta,numventanas,numpiso,direccion,altura,largo,ancho)
    }

    
    }

class Edificio extends Construccion{
        constructor(numpuerta,numventanas,numpiso,direccion,altura,largo,ancho){
            super(numpuerta,numventanas,numpiso,direccion,altura,largo,ancho)
    }
    
        
    }
     
let casa1 = new Casa("2 Puertas", "4 Ventanas", "2 pisos", 3, 25, 15)
console.log(casa1.calcularMcuadrados())
console.log(casa1.cambiarDireccion("Av. Ahuhuetes sur 305"))

let edif1 = new Edificio("20 Puertas", "100 Ventanas", "15 pisos", 10, 40, 30)
console.log(edif1.calcularMcuadrados())
console.log(edif1.cambiarDireccion("Av. Ahuhuetes norte 305"))
