import { Alumno } from "./Alumno";

export class Profesor {
    private nombre: string;
    private ListaAlumnos: Alumno[]; //

    constructor(nombre: string) {
        this.nombre = nombre;
        this.ListaAlumnos = [];
    }
    
        // METODOS 

        // RECIBE UN OBJETO DE TIPO: ALUMNO, (QUE CONTIENE UNA NOTA - NOMBRE)
        public agregarAlumno(alumno: Alumno): void { 
            this.ListaAlumnos.push(alumno);   // agrega alumno
        }
        
        public obtenerAlumnos(): Alumno[] { 
            return this.ListaAlumnos; // Devuelve una lista de alumnos
        } 

        public getNombre(): string { 
            return this.nombre;   
        }

    } 
   


    