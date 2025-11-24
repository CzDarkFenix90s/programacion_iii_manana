console.log("🐾 Bucle for: Registro de pacientes");
for (let i = 1; i <= 10; i++) {
    console.log("Paciente número ", i);
}

let totalConsultas = 0;
for (let i = 1; i <= 10; i++) {
    totalConsultas += i;
}
console.log("Total de consultas atendidas:", totalConsultas);

let nombreMascota = "Rocky";
for (let i = 0; i < nombreMascota.length; i++) {
    console.log("Letra del nombre:", nombreMascota[i]);
}

for (let i = 1; i <= 10; i++) {
    console.log("Dosis número ", i, " aplicada con éxito 💉");
}

console.log("🐶 Bucle While: Turnos de atención");
let turno = 1;
while (turno <= 6) {
    console.log("Atendiendo al paciente del turno ", turno);
    turno++;
}

let temperaturas = [38.5, 39.2, 37.8, 40.1, 38.9];
let indice = 0;
while (indice < temperaturas.length) {
    console.log("Temperatura del paciente ", indice + 1, " es ", temperaturas[indice], "°C");
    indice++;
}

let numeroPaciente = 1;
while (numeroPaciente <= 10) {
    if (numeroPaciente % 2 == 0)
        console.log("Paciente ", numeroPaciente, " atendido por el veterinario de guardia 🩺");
    numeroPaciente++;
}

let dosis = 5;
do {
    console.log("Revisando dosis restante:", dosis);
    dosis--;
} while (dosis != 0);

let mult = 1;
while (mult <= 10) {
    console.log("Consulta número", mult, "- valor total:", mult * 25, "USD");
    mult++;
}

let pesosPacientes = [4.2, 6.8, 3.1, 7.4, 5.5];
let indicePeso = 0;
let mayorPeso = 0;
while (indicePeso < pesosPacientes.length) {
    if (pesosPacientes[indicePeso] > mayorPeso) {
        mayorPeso = pesosPacientes[indicePeso];
    }
    indicePeso++;
}
console.log("El paciente más pesado pesa:", mayorPeso, "kg 🐕");
