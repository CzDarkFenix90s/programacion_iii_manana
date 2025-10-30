class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }
    hacersonido(){
        console.log("Realizar algun ruido")
    }
}

class Perro extends Animal{}
const miPerro = new Perro('Firulais');
const miAnimal = new Animal('Animalito');
miPerro.hacersonido(); 
miAnimal.hacersonido(); 