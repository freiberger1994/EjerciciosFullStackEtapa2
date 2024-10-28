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
exports.MagoEvolucionado = void 0;
var mago_1 = require("./mago");
var MagoEvolucionado = /** @class */ (function (_super) {
    __extends(MagoEvolucionado, _super);
    // escudo energia // tipo de escudo // funcion activar escudo // console.log (los muestro) 
    function MagoEvolucionado(nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaMago, HabilidadEspecialMago) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaMago) || this;
        _this.HabilidadEspecialMago = HabilidadEspecialMago;
        _this.ataque += 20; // ( += ) Incrementa el valor de una variable con otro valor 
        return _this;
    }
    MagoEvolucionado.prototype.lanzarHabilidadEspecial = function () {
        return "".concat(this.nombre, " lanza un hechizo usando ").concat(this.HabilidadEspecialMago);
    };
    return MagoEvolucionado;
}(mago_1.Mago));
exports.MagoEvolucionado = MagoEvolucionado;
