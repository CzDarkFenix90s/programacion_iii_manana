console.log("🐾 FUNCIONES EN CONSULTAS VETERINARIAS");

// --- FORMA CLÁSICA ---
console.log("FORMA CLÁSICA");
function registrarPaciente() {
    console.log("Se ha registrado un nuevo paciente 🐶");
}
registrarPaciente();

// --- FUNCIÓN CON PARÁMETROS Y RETORNO ---
console.log("FORMA CON PARÁMETROS Y RETORNO");
function calcularCostoConsulta(costoBase, medicacion) {
    return costoBase + medicacion;
}
let totalConsulta = calcularCostoConsulta(20, 15);
console.log("El costo total de la consulta es: $", totalConsulta);

// --- FUNCIÓN FLECHA ---
console.log("FUNCIÓN FLECHA");
const aplicarDescuento = (total, porcentaje) => {
    return total - (total * porcentaje / 100);
}
let totalConDescuento = aplicarDescuento(totalConsulta, 10);
console.log("Total con descuento del 10%:", totalConDescuento);

// --- FUNCIÓN CON RETORNO DIRECTO ---
console.log("FUNCIÓN RETORNO DIRECTO");
const calcularEdadAnimal = edad => edad * 7;
console.log("Edad equivalente en años humanos:", calcularEdadAnimal(3), "años");

// --- FUNCIÓN CON PARÁMETROS POR DEFECTO ---
console.log("FUNCIÓN CON PARÁMETROS POR DEFECTO");
function saludarVeterinario(nombre, saludo = "Hola") {
    return `${saludo}, Dr(a). ${nombre} 🩺`;
}
let saludo1 = saludarVeterinario("Valeria");
let saludo2 = saludarVeterinario("Ramírez", "Buenos días");
console.log(saludo1);
console.log(saludo2);
