class Paciente {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad; // edad en años
    }

    esAdulto() {
        if (this.edad >= 2) {
            console.log(`${this.nombre} es un paciente adulto 🐶`);
        } else {
            console.log(`${this.nombre} es un cachorro 🐾`);
        }
    }

    mostrar() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad} años`);
    }
}

const luna = new Paciente('Luna', 1);

luna.esAdulto();
luna.mostrar();
