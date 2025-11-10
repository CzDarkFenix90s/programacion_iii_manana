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
exports.CirujanoVeterinario = exports.Veterinario = void 0;
var Veterinario = /** @class */ (function () {
    function Veterinario(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }
    Veterinario.prototype.atender = function () {
        console.log("\uD83D\uDC68\u200D\u2695\uFE0F ".concat(this.nombre, " atiende consulta de ").concat(this.especialidad, " \uD83D\uDC3E"));
    };
    return Veterinario;
}());
exports.Veterinario = Veterinario;
var CirujanoVeterinario = /** @class */ (function (_super) {
    __extends(CirujanoVeterinario, _super);
    function CirujanoVeterinario(nombre, especialidad) {
        return _super.call(this, nombre, especialidad) || this;
    }
    CirujanoVeterinario.prototype.atender = function () {
        console.log("\uD83D\uDD2A ".concat(this.nombre, " realiza cirug\u00EDa de ").concat(this.especialidad, " \uD83C\uDFE5"));
    };
    return CirujanoVeterinario;
}(Veterinario));
exports.CirujanoVeterinario = CirujanoVeterinario;
// 👇 Estas líneas hacen que se muestre algo en consola
var vet1 = new Veterinario("Dr. Gómez", "perros");
var vet2 = new CirujanoVeterinario("Dra. Ramírez", "fracturas");
vet1.atender();
vet2.atender();
