class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajar() {
        console.log(`${this.nombre} está atendiendo pacientes en la clínica veterinaria 🏥🐾`);
    }
    calcularVacaciones() {
        return this.salario * 0.15;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Veterinario extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Asistente extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}

const vetValeria = new Veterinario('Valeria', 2000);
const asisCarlos = new Asistente('Carlos', 1200);
vetValeria.trabajar();
asisCarlos.trabajar();
console.log(vetValeria.calcularVacaciones());
console.log(asisCarlos.calcularVacaciones());
console.log(vetValeria.horasExtra(5));
console.log(asisCarlos.horasExtra(4));
