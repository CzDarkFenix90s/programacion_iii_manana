var edad = 3;
var nombre = 'Luna';
var activo = true;
var valor = 'consulta';
if (edad > 1 && activo) {
    console.log('Paciente activo en el sistema 🐾');
}
else {
    console.log('Paciente inactivo');
}
var pacientes = ['Rocky', 'Max', 'Nina'];
for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);
}
var EstadoConsulta;
(function (EstadoConsulta) {
    EstadoConsulta[EstadoConsulta["Pendiente"] = 0] = "Pendiente";
    EstadoConsulta[EstadoConsulta["EnProceso"] = 1] = "EnProceso";
    EstadoConsulta[EstadoConsulta["Finalizada"] = 2] = "Finalizada";
})(EstadoConsulta || (EstadoConsulta = {}));
console.log(EstadoConsulta);
console.log(EstadoConsulta.Finalizada);
