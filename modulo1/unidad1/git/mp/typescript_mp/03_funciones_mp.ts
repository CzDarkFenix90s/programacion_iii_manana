function saludar(nombre: string): string {
    return `Hola ${nombre}, bienvenido al sistema de Consultas Veterinarias 🐾`;
}
console.log(saludar('Valeria'));

const calcularCostoConsulta = (costoBase: number, medicacion: number): number => {
    return costoBase + medicacion;
}
console.log(calcularCostoConsulta(25, 10));

function mostrarMensaje(): void {
    console.log(`Bienvenido al panel veterinario 🩺`);
    console.log(`Gestionando consultas y pacientes...`);
}
mostrarMensaje();

function calcularAreaJaula(radio: number): number {
    return Math.PI * radio * radio;
}
function calcularAreaJaulaVoid(radio: number): void {
    console.log(`Área de la jaula:`, Math.PI * radio * radio);
}
console.log(calcularAreaJaula(5));
calcularAreaJaulaVoid(7);
