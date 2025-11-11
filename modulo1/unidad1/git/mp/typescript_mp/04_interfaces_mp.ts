interface Paciente {
    id: number;
    nombre: string;
    especie?: string;
}

const paciente1: Paciente = {
    id: 101,
    nombre: 'Luna 🐶'
}

const paciente2: Paciente = {
    id: 102,
    nombre: 'Milo 🐱',
    especie: 'Gato'
}

console.log(paciente1);
console.log(paciente1.id);
console.log(paciente1.nombre);
console.log(paciente1.especie);

console.log(paciente2);
console.log(paciente2.id);
console.log(paciente2.nombre);
console.log(paciente2.especie);
