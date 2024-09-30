"use strict";
// GET = Permite leer el valor de una propiedad privada desde fuera de la clase.
// SET = Permite modificar el valor de una propiedad privada desde fuera de la clase.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, tipoVehiculo) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
    }
    Vehiculo.prototype.getTipoVehiculo = function () {
        return this.tipoVehiculo;
    };
    Vehiculo.prototype.setTipoVehiculo = function (tipoVehiculo) {
        this.tipoVehiculo = tipoVehiculo;
    };
    // GET
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.devolverDatos = function () {
        return ("".concat(this.getPatente(), " esta es la patente: ").concat(this.getMarca(), " la marca es:,  ").concat(this.getModelo(), " ").concat(this.getAnio(), "el a\u00F1o es:}").concat(this.getTipoVehiculo()));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
