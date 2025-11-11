// Temperatura del paciente (en °C)
let temperatura = 39;

if (temperatura > 38) {
    console.log("El paciente presenta fiebre 🐶");
}

// Verificación de acceso al sistema
let password = "vet123";
if (password === "veterinaria2024") {
    console.log("Acceso concedido al sistema clínico");
} else {
    console.log("Acceso denegado ❌");
}

// Evaluación del estado de salud general
let salud = 7;
if (salud >= 9) {
    console.log("Excelente estado de salud 🩺");
} else if (salud >= 6) {
    console.log("Salud estable");
} else {
    console.log("Requiere atención médica inmediata 🚨");
}

// Verificar edad y vacunación del paciente
let edad = 2; // años
let tiene_vacunas = true;

if (edad >= 1) {
    if (tiene_vacunas) {
        console.log("Paciente vacunado y en buen estado 🐾");
    } else {
        console.log("Paciente necesita vacunas 💉");
    }
} else {
    console.log("Paciente en etapa de cachorro");
}

// Otra forma con operador lógico AND
edad = 3;
tiene_vacunas = false;
if (edad >= 1 && tiene_vacunas) {
    console.log("Paciente adulto vacunado");
} else if (edad >= 1) {
    console.log("Paciente adulto sin vacunas");
} else {
    console.log("Paciente cachorro");
}

// Estructura Switch (día de atención)
let dia = "viernes";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana de consultas 🐶");
        break;
    case "viernes":
        console.log("Último día de atención antes del fin de semana 🐾");
        break;
    default:
        console.log("Día normal de atención en clínica");
}

// Comparar tres pesos de mascotas
let a = 5.2;  // kg de la mascota A
let b = 8.4;  // kg de la mascota B
let c = 3.6;  // kg de la mascota C
let mayor = 0;

if (a > b) {
    mayor = a;
}
if (c > mayor) {
    mayor = c;
}
console.log("La mascota más pesada pesa", mayor, "kg");
