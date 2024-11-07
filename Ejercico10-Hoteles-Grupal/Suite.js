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
exports.Suite = void 0;
var Habitacion_1 = require("./Habitacion");
var Servicio_1 = require("./Servicio");
var Suite = /** @class */ (function (_super) {
    __extends(Suite, _super);
    function Suite(numero, precioBase) {
        var _this = _super.call(this, numero, precioBase) || this;
        // Agregar servicios gratuitos específicos para suites
        _this.servicios.push(new Servicio_1.Servicio("Internet", 0));
        _this.servicios.push(new Servicio_1.Servicio("Televisión por cable", 0));
        return _this;
    }
    // Implementación del cálculo de costo total para suite
    Suite.prototype.calcularCostoTotal = function () {
        var costoTotal = this.precioBase;
        this.servicios.forEach(function (servicio) {
            costoTotal += servicio.costo;
        });
        return costoTotal;
    };
    return Suite;
}(Habitacion_1.Habitacion));
exports.Suite = Suite;
