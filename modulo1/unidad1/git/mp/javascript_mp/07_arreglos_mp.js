console.log("🐾 ARRAYS EN EL SISTEMA VETERINARIO");

// Arreglo de pacientes (mascotas)
let pacientes = ["Rocky", "Luna", "Max", "Nina"];
let listaVacia = new Array();
let listaVacia2 = [];
console.log("Lista original de pacientes:", pacientes);
console.log(listaVacia);
console.log(listaVacia2);

// Acceso a los elementos del array
console.log("Acceso a los pacientes por índice:");
console.log("Primer paciente:", pacientes[0]);
console.log("Cuarto paciente:", pacientes[3]);

// Modificar elemento del array
console.log("Modificar nombre del primer paciente");
pacientes[0] = "Toby";
console.log(pacientes);

// Agregar elementos
console.log("Agregar un nuevo paciente al final 🐶");
pacientes.push("Milo");
console.log(pacientes);

console.log("Agregar paciente al inicio 🐕");
pacientes.unshift("Coco");
console.log(pacientes);

// Eliminar elementos
console.log("Eliminar el último paciente de la lista");
pacientes.pop();
console.log(pacientes);

console.log("Eliminar el primer paciente de la lista");
pacientes.shift();
console.log(pacientes);

// Iteración del array
console.log("🐕 Iteración con While");
let indice = 0;
while (indice < pacientes.length) {
    console.log("Paciente", indice, ":", pacientes[indice]);
    indice++;
}

console.log("🐕 Iteración con For");
for (let i = 0; i < pacientes.length; i++) {
    console.log("Paciente:", pacientes[i]);
}

console.log("🐕 Iteración con For...of");
for (let paciente of pacientes) {
    console.log("Atendiendo a:", paciente);
}

console.log("🐕 Iteración con ForEach");
pacientes.forEach(function (paciente, indice) {
    console.log("Turno", indice + 1, ":", paciente);
});
