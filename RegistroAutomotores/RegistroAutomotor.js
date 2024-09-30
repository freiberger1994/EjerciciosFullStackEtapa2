"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    // METODOS 
    function RegistroAutomotor(ListaVehiculos) {
        this.ListaVehiculos = ListaVehiculos;
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.ListaVehiculos.push(vehiculo);
    };
    // Obtener vehiculo en el Registro por Patente y buscar en arreglo de vehiculos uno con la misma patente.
    // Find: sirve para encontrar un elemento en un arreglo.
    RegistroAutomotor.prototype.obtenerVehiculo = function (patente) {
        return this.ListaVehiculos.find(function (vehiculo) { return vehiculo.getPatente() == patente; }); // encontrar 
    };
    // Encontrar Vehiculo - Modificar atributos
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, nuevaMarca, nuevoModelo, nuevoAnio) {
        var vehiculo = this.obtenerVehiculo(patente); // Encuentra el vehículo 
        if (vehiculo) {
            if (nuevaMarca)
                vehiculo.setMarca(nuevaMarca); // Modifica la marca 
            if (nuevoModelo)
                vehiculo.setModelo(nuevoModelo); // Modifica el modelo 
            if (nuevoAnio)
                vehiculo.setAnio(nuevoAnio); // Modifica el año 
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    };
    RegistroAutomotor.prototype.darDeBaja = function (patente) {
        var vehiculoEncontrado = this.obtenerVehiculo(patente);
        if (vehiculoEncontrado) {
            this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculoEncontrado), 1); // te da el indice del objeto encontrado
        }
        else {
            console.log("Vehículo no encontrado.");
        }
    };
    // Mostrar todos los vehículos
    RegistroAutomotor.prototype.mostrarVehiculos = function () {
        this.ListaVehiculos.forEach(function (vehiculo, indice) {
            console.log("".concat(indice, ": ").concat(vehiculo.devolverDatos()));
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
