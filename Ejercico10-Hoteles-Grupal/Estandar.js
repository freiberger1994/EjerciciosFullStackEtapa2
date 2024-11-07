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
exports.HabitacionEstandar = void 0;
var Habitacion_1 = require("./Habitacion");
var HabitacionEstandar = /** @class */ (function (_super) {
    __extends(HabitacionEstandar, _super);
    function HabitacionEstandar(numero, precioBase) {
        return _super.call(this, numero, precioBase) || this;
    }
    // Implementación del cálculo de costo total para habitación estándar
    HabitacionEstandar.prototype.calcularCostoTotal = function () {
        var costoTotal = this.precioBase;
        this.servicios.forEach(function (servicio) {
            costoTotal += servicio.costo;
        });
        return costoTotal;
    };
    return HabitacionEstandar;
}(Habitacion_1.Habitacion));
exports.HabitacionEstandar = HabitacionEstandar;
