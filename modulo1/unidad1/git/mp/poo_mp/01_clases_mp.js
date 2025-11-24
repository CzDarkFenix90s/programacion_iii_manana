class Paciente {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    registrar() {
        console.log(`📋 ${this.nombre} (${this.especie}) ha sido registrado en el sistema.`);
    }

    atender() {
        console.log(`🩺 ${this.nombre} (${this.especie}) está siendo atendido por el veterinario.`);
    }

    alta() {
        console.log(`✅ ${this.nombre} (${this.especie}) ha sido dado de alta.`);
    }
}

const miPaciente = new Paciente('Luna', 'Perro');

miPaciente.registrar();
miPaciente.atender();
miPaciente.alta();
console.log("Nombre del paciente:", miPaciente.nombre);
console.log("Especie del paciente:", miPaciente.especie);
