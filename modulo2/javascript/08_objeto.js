console.log("Objetos");
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Quito",
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
console.log("Modificacion del objeto");
persona.nombre = "Maria"
console.log(persona);
persona.direccion="Av. Occidental";
console.log(persona);
console.log("Eliminar clave del objeto");
delete persona.direccion;
console.log(persona);

console.log("Recorrer un objeto");
for (let clave in persona){
  console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values");
console.log(Object.values(persona));
console.log("Objetos Anidados");
let estudiante = {
  nombre: "Perdo",
  apellido: "Perez",
  contacto: {
    correo: "perodasd@gmail.com",
    telefono: "0998765432",
    celular: "0987654321"
},
materias: [
    {
        nombre: "Matematicas",
        calificacion: 8
    },
    {
        nombre: "Fisica",
        calificacion: 9
    }
]
};
console.log("Estudiante: ", estudiante);

    