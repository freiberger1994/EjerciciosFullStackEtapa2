"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var Profesor_1 = require("./Profesor");
var Escuela_1 = require("./Escuela");
// Crear Alumnos
var alumno1 = new Alumno_1.Alumno("Leo", 5); // nombre y nota
var alumno2 = new Alumno_1.Alumno("Mario", 7);
var alumno3 = new Alumno_1.Alumno("Juan", 9);
// Crear Profesor
var profesor1 = new Profesor_1.Profesor("Profe Javier");
var profesor2 = new Profesor_1.Profesor("Profe Sofia");
// Alumnos que pertenecen a un profe
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);
profesor2.agregarAlumno(alumno3);
// Crear escuela
var escuela = new Escuela_1.Escuela("Escuela Industrial");
// Matricular alumnos (a la escuela)
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
// Contratar profesor
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);
// Verificar si un alumno esta aprobado
console.log("".concat(alumno1.getNombre(), " esta aprobado: ").concat(alumno1.estaAprobado(), ", su nota es ").concat(alumno1.getNota(), "}"));
console.log("".concat(alumno2.getNombre(), " esta aprobado: ").concat(alumno2.estaAprobado()));
// Ver lista de alumnos en la escuela
console.log("Alumnos en la escuela:", escuela.obtenerAlumnos().map(function (alumno) { return alumno.getNombre(); })); // map = muestra todos los alumnos tipo lista
// Desvincular un alumno de la escuela
escuela.expulsarAlumno("Juan");
console.log("Alumnos despues de expulsar a Juan", escuela.obtenerAlumnos().map(function (alumno) { return alumno.getNombre(); }));
// Despedir a un profesor
escuela.despedirProfesor("Profe Javier");
console.log("Profes despues de despedir a Javier:", escuela.obtenerProfesores().map(function (profesor) { return profesor.getNombre(); }));
