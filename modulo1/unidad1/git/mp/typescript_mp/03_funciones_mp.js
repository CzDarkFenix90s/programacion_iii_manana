function saludar(nombre) {
    return "Hola ".concat(nombre, ", bienvenido al sistema de Consultas Veterinarias \uD83D\uDC3E");
}
console.log(saludar('Valeria'));
var calcularCostoConsulta = function (costoBase, medicacion) {
    return costoBase + medicacion;
};
console.log(calcularCostoConsulta(25, 10));
function mostrarMensaje() {
    console.log("Bienvenido al panel veterinario \uD83E\uDE7A");
    console.log("Gestionando consultas y pacientes...");
}
mostrarMensaje();
function calcularAreaJaula(radio) {
    return Math.PI * radio * radio;
}
function calcularAreaJaulaVoid(radio) {
    console.log("\u00C1rea de la jaula:", Math.PI * radio * radio);
}
console.log(calcularAreaJaula(5));
calcularAreaJaulaVoid(7);
