"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habitacion = void 0;
// Clase abstracta para las habitaciones
var Habitacion = /** @class */ (function () {
    function Habitacion(numero, precioBase) {
        this.servicios = [];
        this.numero = numero;
        this.precioBase = precioBase;
        this.estado = "disponible"; // definimos estado aca 
    }
    // CAMBIAR PRECIO BASE STATIC 
    Habitacion.prototype.reservar = function () {
        if (this.estado == "disponible") {
            this.estado = "ocupada";
        }
        else {
            console.log("La habitaci\u00F3n ".concat(this.numero, " ya est\u00E1 ocupada."));
        }
    };
    Habitacion.prototype.liberar = function () {
        if (this.estado == "ocupada") {
            this.estado = "disponible";
        }
        else {
            console.log("La habitaci\u00F3n ".concat(this.numero, " ya est\u00E1 disponible."));
        }
    };
    // Método para agregar un servicio adicional
    Habitacion.prototype.agregarServicio = function (servicio) {
        this.servicios.push(servicio);
    };
    // Método para quitar un servicio de habitación
    Habitacion.prototype.quitarServicio = function (servicioNombre) {
        this.servicios = this.servicios.filter(// VER - NO REEMPLAZAR EL SERVICIO QUE YA TENGO 
        function (servicio) { return servicio.nombre !== servicioNombre; });
    };
    // Métodos getter para acceder a los atributos protegidos
    Habitacion.prototype.getNumero = function () {
        return this.numero;
    };
    Habitacion.prototype.getEstado = function () {
        return this.estado;
    };
    Habitacion.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Habitacion.prototype.getServicios = function () {
        return this.servicios;
    };
    return Habitacion;
}());
exports.Habitacion = Habitacion;
