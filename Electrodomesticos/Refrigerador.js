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
exports.Refrigerador = void 0;
var Electrodomesticos_1 = require("./Electrodomesticos");
var Refrigerador = /** @class */ (function (_super) {
    __extends(Refrigerador, _super);
    function Refrigerador(nombre, marca, precio) {
        var _this = _super.call(this, nombre, marca, precio) || this;
        _this.dispensorDeAgua = true;
        _this.nivelDeAgua = 100;
        return _this;
    }
    Refrigerador.prototype.funcionalidadEspecial = function () {
        if (this.dispensorDeAgua && this.nivelDeAgua > 10) { //Si existe Disp. de agua y su nivel es mayor a 10, sirve agua
            this.nivelDeAgua -= 10;
            console.log("Podes servir agua");
        }
        else {
            console.log("No podes servir agua");
        }
    };
    Refrigerador.prototype.cargarAgua = function () {
        if (this.nivelDeAgua < 100) {
            this.nivelDeAgua = 100;
            console.log("Tanque lleno de agua");
        }
        else {
            console.log("El tanque ya esta lleno");
        }
    };
    return Refrigerador;
}(Electrodomesticos_1.Electrodomestico));
exports.Refrigerador = Refrigerador;
