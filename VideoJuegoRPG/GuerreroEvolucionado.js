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
exports.GuerreroEvolucionado = void 0;
var guerrero_1 = require("./guerrero");
var GuerreroEvolucionado = /** @class */ (function (_super) {
    __extends(GuerreroEvolucionado, _super);
    function GuerreroEvolucionado(nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaGuerrero, HabilidadEspecialGuerrero) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaGuerrero) || this;
        _this.HabilidadEspecialGuerrero = HabilidadEspecialGuerrero;
        _this.ataque += 32;
        return _this;
    }
    GuerreroEvolucionado.prototype.atacar = function () {
        console.log(" Estoy pegando un espadazo ");
    };
    GuerreroEvolucionado.prototype.lanzarHabilidadEspecial = function () {
        return "".concat(this.nombre, " usa su habilidad especial: ").concat(this.HabilidadEspecialGuerrero, "!");
    };
    return GuerreroEvolucionado;
}(guerrero_1.Guerrero));
exports.GuerreroEvolucionado = GuerreroEvolucionado;
