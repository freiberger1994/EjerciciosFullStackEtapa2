import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
    private nombre: string;
    private alumnos: Alumno[];
    private profesores: Profesor[];

    constructor (nombre: string) {
        this.nombre = nombre;
        this.alumnos = [];
        this.profesores = [];
    } 

    getNombre(): string {
        return this.nombre;
    }

    matricularAlumno(alumno: Alumno): void { // Paso por parametro la Instancia Alumno
        this.alumnos.push(alumno); 
    }

    contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }
    
    // Filter = crea un nuevo arreglo filtrando el nombre especifico que le pasas por parametro
    expulsarAlumno(nombre: string): void { 
        this.alumnos = this.alumnos.filter(alumno => alumno.getNombre() !== nombre);
    }
    
    despedirProfesor(nombre: string): void {
    this.profesores = this.profesores.filter(profesor => profesor.getNombre() !== nombre);
    }

    obtenerAlumnos(): Alumno[] {
        return this.alumnos;
    }

    obtenerProfesores(): Profesor[] {
        return this.profesores;
    }

}