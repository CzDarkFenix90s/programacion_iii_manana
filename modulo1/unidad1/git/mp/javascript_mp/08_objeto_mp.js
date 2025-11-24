console.log("🐾 OBJETOS EN EL SISTEMA VETERINARIO");

let paciente = {
    nombre: "Luna",
    edad: 4,
    especie: "Perro"
};
console.log(paciente);
console.log(paciente.nombre);
console.log(paciente.especie);
console.log(paciente["edad"]);
console.log("Modificación de una clave del objeto");
paciente.nombre = "Max";
console.log(paciente);
console.log("Incluir nueva clave al objeto");
paciente.vacunado = true;
console.log(paciente);
console.log("Eliminar clave del objeto");
delete paciente.vacunado;
console.log(paciente);
console.log("Recorrer un Objeto (propiedades del paciente)");
for (let clave in paciente) {
    console.log(clave);
}
console.log("Mostrar claves con Object.keys");
console.log(Object.keys(paciente));
console.log("Mostrar valores con Object.values");
console.log(Object.values(paciente));
console.log("🐕 Objetos Anidados");
let veterinario = {
    nombre: "Dra. Valeria Torres",
    especialidad: "Medicina Interna",
    contacto: {
        correo: "valeria.torres@clinicavet.com",
        telefono: "022456789",
        celular: "0998765432"
    },
    consultas: [
        {
            paciente: "Rocky",
            motivo: "Control de vacunas 💉",
            costo: 25
        },
        {
            paciente: "Nina",
            motivo: "Revisión dental 🦷",
            costo: 30
        },
    ]
};
console.log("Veterinario: ", veterinario);
