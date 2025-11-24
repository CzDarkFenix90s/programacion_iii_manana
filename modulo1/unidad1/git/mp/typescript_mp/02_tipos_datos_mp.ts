let edad: number = 3;
let nombre: string = 'Luna';
let activo: boolean = true;
let valor: any = 'consulta';

if (edad > 1 && activo) {
    console.log('Paciente activo en el sistema 🐾');
} else {
    console.log('Paciente inactivo');
}

let pacientes: string[] = ['Rocky', 'Max', 'Nina'];
for (let i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}

enum EstadoConsulta {
    Pendiente,
    EnProceso,
    Finalizada
}

console.log(EstadoConsulta);
console.log(EstadoConsulta.Finalizada);
