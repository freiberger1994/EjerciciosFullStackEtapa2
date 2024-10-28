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
exports.ArqueroEvolucionado = void 0;
var arquero_1 = require("./arquero");
var ArqueroEvolucionado = /** @class */ (function (_super) {
    __extends(ArqueroEvolucionado, _super);
    function ArqueroEvolucionado(nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaArquero) {
        var _this = _super.call(this, nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaArquero) || this;
        _this.HabilidadUnicaArquero = HabilidadUnicaArquero;
        _this.ataque += 45;
        return _this;
    }
    ArqueroEvolucionado.prototype.Atacar = function () {
        console.log(" Estoy pegando un espadazo ");
    };
    ArqueroEvolucionado.prototype.lanzarHabilidadEspecial = function () {
        return "".concat(this.nombre, " usa su habilidad especial: ").concat(this.HabilidadUnicaArquero, "!");
    };
    return ArqueroEvolucionado;
}(arquero_1.Arquero));
exports.ArqueroEvolucionado = ArqueroEvolucionado;
