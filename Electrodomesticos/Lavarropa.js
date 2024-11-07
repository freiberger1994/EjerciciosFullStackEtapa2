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
exports.Lavarropa = void 0;
var Electrodomesticos_1 = require("./Electrodomesticos");
var Lavarropa = /** @class */ (function (_super) {
    __extends(Lavarropa, _super);
    function Lavarropa(nombre, marca, precio, cargaDeRopa) {
        var _this = _super.call(this, nombre, marca, precio) || this;
        _this.cargaMaxima = 50;
        _this.cargaDeRopa = cargaDeRopa;
        return _this;
    }
    Lavarropa.prototype.funcionalidadEspecial = function () {
        if (this.cargaDeRopa > this.cargaMaxima) {
            console.log("Superaste el peso maximo");
        }
        else {
            console.log("El lavado comenzo con exito");
        }
    };
    Lavarropa.prototype.cambiarPeso = function (cargaDeRopa) {
        this.cargaDeRopa = cargaDeRopa;
    };
    return Lavarropa;
}(Electrodomesticos_1.Electrodomestico));
exports.Lavarropa = Lavarropa;
