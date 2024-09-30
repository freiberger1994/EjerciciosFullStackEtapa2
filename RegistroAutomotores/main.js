"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
// Crear Auto / Moto / Camion
var vehiculo1 = new Vehiculo_1.Vehiculo("2234", "Auto");
console.log(vehiculo1);
var vehiculo2 = new Vehiculo_1.Vehiculo("2134", "Moto");
console.log(vehiculo2);
var vehiculo3 = new Vehiculo_1.Vehiculo("1983", "Camion");
console.log(vehiculo3);
var vehiculo4 = new Vehiculo_1.Vehiculo(" ", " ");
// Modelo
vehiculo1.setModelo("Toyota Corolla");
vehiculo1.setModelo("Tornado 220");
vehiculo1.setModelo("IVECO");
// Registro de los 3 vehiculos
var registroAutomotor1 = new RegistroAutomotor_1.RegistroAutomotor([vehiculo1, vehiculo2, vehiculo3]);
//Eliminar - Dar de baja
registroAutomotor1.darDeBaja("2234"); // lo elimino por la patente
// Modificar
registroAutomotor1.modificarVehiculo("1983", "SCANIA", "360", 2024);
// agregar vehiculo 
registroAutomotor1.agregarVehiculo(vehiculo4);
console.log(vehiculo4);
// mostrarDatos 
registroAutomotor1.mostrarVehiculos();
