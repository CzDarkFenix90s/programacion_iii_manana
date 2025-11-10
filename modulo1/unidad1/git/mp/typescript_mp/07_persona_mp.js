"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Paciente.prototype.mostrarInfo = function () {
        console.log("\uD83D\uDC3E Paciente: ".concat(this.nombre, ", Edad: ").concat(this.edad, " a\u00F1os"));
    };
    return Paciente;
}());
exports.Paciente = Paciente;
var paciente1 = new Paciente("Luna", 3);
paciente1.mostrarInfo();
