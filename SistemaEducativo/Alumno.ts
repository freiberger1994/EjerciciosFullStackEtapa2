import { Profesor } from "./Profesor";

// GET = Permite leer el valor de una propiedad privada desde fuera de la clase.
// SET = Permite modificar el valor de una propiedad privada desde fuera de la clase.

export class Alumno {
    private nombre: string;
    private nota: number;
    
    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    } 

    public getNombre(): string {   // Trae el nombre 
        return this.nombre;
    }

    public getNota(): number {
        return this.nota;
    }
    
    public setNota(nota: number): void {
        this.nota = nota;
    } 

    public estaAprobado(): boolean {
        if (this.nota >= 7) {
            return true;
        } else {
            return false;
        }
    }
    
}

