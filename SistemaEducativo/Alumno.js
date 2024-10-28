"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
// GET = Permite leer el valor de una propiedad privada desde fuera de la clase.
// SET = Permite modificar el valor de una propiedad privada desde fuera de la clase.
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota >= 7) {
            return true;
        }
        else {
            return false;
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
