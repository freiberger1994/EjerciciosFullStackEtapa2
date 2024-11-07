"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estandar_1 = require("./Estandar");
var Suite_1 = require("./Suite");
var Servicio_1 = require("./Servicio");
// CREAR HABITACION ESTANDAR
var habitacion1 = new Estandar_1.HabitacionEstandar(1, 150);
var habitacion2 = new Estandar_1.HabitacionEstandar(2, 150);
console.log(habitacion1);
// AGREGADO SUITE
var habitacionSuite1 = new Suite_1.Suite(3, 300);
var habitacionSuite2 = new Suite_1.Suite(4, 300);
console.log(habitacionSuite1);
habitacion1.reservar();
console.log(habitacion1);
// SERVICIO
var spa = new Servicio_1.Servicio("SPA", 3000);
habitacionSuite1.agregarServicio(spa);
console.log(habitacionSuite1);
habitacion1.agregarServicio(spa);
console.log(habitacion1);
console.log(habitacionSuite1.calcularCostoTotal()); // Costo de la suite + Servicios  
