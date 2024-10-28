"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
        this.ListaAlumnos = [];
    }
    // METODOS 
    // RECIBE UN OBJETO DE TIPO: ALUMNO, (QUE CONTIENE UNA NOTA - NOMBRE)
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.ListaAlumnos.push(alumno); // agrega alumno
    };
    Profesor.prototype.obtenerAlumnos = function () {
        return this.ListaAlumnos; // Devuelve una lista de alumnos
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    return Profesor;
}());
exports.Profesor = Profesor;
