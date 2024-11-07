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
exports.Microonda = void 0;
var Electrodomesticos_1 = require("./Electrodomesticos");
var Microonda = /** @class */ (function (_super) {
    __extends(Microonda, _super);
    function Microonda(nombre, marca, precio) {
        var _this = _super.call(this, nombre, marca, precio) || this;
        _this.temperaturaActual = 0;
        return _this;
    }
    Microonda.prototype.funcionalidadEspecial = function () {
        var _this = this;
        if (!this.getEncendido())
            return 'El microonda está apagado';
        var intervalo = setInterval(function () {
            if (_this.temperaturaActual < 20) {
                _this.temperaturaActual += 10;
                console.log("La temperatura del microonda es ".concat(_this.temperaturaActual, "\u00B0C"));
            }
            else {
                console.log('El microonda ha alcanzado la temperatura máxima');
                clearInterval(intervalo); //    LIMPIA/CORTA Intervalo
            }
        }, 1000);
    };
    return Microonda;
}(Electrodomesticos_1.Electrodomestico));
exports.Microonda = Microonda;
