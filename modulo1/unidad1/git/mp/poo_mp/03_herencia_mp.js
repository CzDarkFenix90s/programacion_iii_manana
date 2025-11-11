class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hacerSonido() {
        console.log(`${this.nombre} realiza algún sonido durante la consulta 🐾`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre} ladra alegremente durante la revisión 🐶`);
    }
}

const miPerro = new Perro('Toby');
const miAnimal = new Animal('Lucero');
miPerro.hacerSonido();
miAnimal.hacerSonido();
