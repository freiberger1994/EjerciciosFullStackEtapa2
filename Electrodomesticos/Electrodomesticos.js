"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(nombre, marca, precio) {
        this.internet = false;
        this.encendido = false;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
    Electrodomestico.prototype.encender = function () {
        if (!this.encendido) {
            this.encendido = true;
            console.log("El electrodomestico ".concat(this.nombre, " encendio"));
        }
        else {
            console.log("El electrodomestico ya esta encendido");
        }
    };
    Electrodomestico.prototype.apagar = function () {
        if (this.encendido) {
            this.encendido = false;
            console.log("El electrodomestico se apago.");
        }
        else {
            console.log("El electrodomestico esta apagado.");
        }
    };
    Electrodomestico.prototype.activarInternet = function () {
        if (!this.internet) {
            this.internet = true;
            console.log("El electrodomestico tiene conexion a internet.");
        }
        else {
            console.log("El electrodomestico ya esta conectado a internet.");
        }
    };
    Electrodomestico.prototype.actualizarSoftware = function () {
        if (this.internet) {
            console.log("El software de ".concat(this.nombre, " fue actualizado"));
        }
        else {
            console.log("".concat(this.nombre, " no cuenta con conexi\u00F3n a internet"));
        }
    };
    Electrodomestico.prototype.getNombre = function () {
        return this.nombre;
    };
    Electrodomestico.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Electrodomestico.prototype.getPrecio = function () {
        return this.precio;
    };
    Electrodomestico.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    Electrodomestico.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Electrodomestico.prototype.getEncendido = function () {
        return this.encendido;
    };
    Electrodomestico.prototype.setEncendido = function (encendido) {
        this.encendido = encendido;
    };
    Electrodomestico.prototype.getInternet = function () {
        return this.internet;
    };
    Electrodomestico.prototype.setInternet = function (internet) {
        this.internet = internet;
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
