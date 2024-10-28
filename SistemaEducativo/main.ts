import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Escuela } from "./Escuela";

// Crear Alumnos
const alumno1 = new Alumno("Leo", 5);   // nombre y nota
const alumno2 = new Alumno("Mario", 7);
const alumno3 = new Alumno("Juan", 9);

// Crear Profesor
const profesor1 = new Profesor("Profe Javier");
const profesor2 = new Profesor("Profe Sofia");

// Alumnos que pertenecen a un profe
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);

profesor2.agregarAlumno(alumno3);

// Crear escuela
const escuela = new Escuela("Escuela Industrial");

// Matricular alumnos (a la escuela)
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);

// Contratar profesor
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);

// Verificar si un alumno esta aprobado
console.log(`${alumno1.getNombre()} esta aprobado: ${alumno1.estaAprobado()}, su nota es ${alumno1.getNota()}}`);
console.log(`${alumno2.getNombre()} esta aprobado: ${alumno2.estaAprobado()}`); 

// Ver lista de alumnos en la escuela
console.log("Alumnos en la escuela:", escuela.obtenerAlumnos().map(alumno => alumno.getNombre())); // map = muestra todos los alumnos tipo lista

// Desvincular un alumno de la escuela
escuela.expulsarAlumno("Juan");
console.log("Alumnos despues de expulsar a Juan", escuela.obtenerAlumnos().map(alumno => alumno.getNombre())); 

// Despedir a un profesor
escuela.despedirProfesor("Profe Javier");
console.log("Profes despues de despedir a Javier:", escuela.obtenerProfesores().map(profesor => profesor.getNombre()));




