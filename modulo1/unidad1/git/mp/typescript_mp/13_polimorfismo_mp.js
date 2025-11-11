"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinarioEmergencia = void 0;
var _11_herencia_mp_1 = require("./11_herencia_mp");
var VeterinarioEmergencia = /** @class */ (function (_super) {
    __extends(VeterinarioEmergencia, _super);
    function VeterinarioEmergencia(nombre, especialidad) {
        return _super.call(this, nombre, especialidad) || this;
    }
    VeterinarioEmergencia.prototype.atender = function () {
        console.log("\uD83D\uDEA8 ".concat(this.nombre, " atiende EMERGENCIA de ").concat(this.especialidad, " \u26A1"));
    };
    VeterinarioEmergencia.prototype.getTipoAtencion = function () {
        console.log("🆘 Atención inmediata a pacientes críticos");
    };
    return VeterinarioEmergencia;
}(_11_herencia_mp_1.Veterinario));
exports.VeterinarioEmergencia = VeterinarioEmergencia;
var vetGeneral = new _11_herencia_mp_1.Veterinario("Laura", "medicina general");
var vetCirujano = new _11_herencia_mp_1.CirujanoVeterinario("Andrés", "traumatología");
var vetEmergencia = new VeterinarioEmergencia("Ramírez", "urgencias");
console.log(vetEmergencia.nombre);
console.log(vetEmergencia.especialidad);
vetEmergencia.atender();
vetEmergencia.getTipoAtencion();
// Polimorfismo
var equipo = [vetGeneral, vetCirujano, vetEmergencia];
for (var _i = 0, equipo_1 = equipo; _i < equipo_1.length; _i++) {
    var v = equipo_1[_i];
    v.atender();
}
