import { Personaje } from "./Personaje";
 
export class Mago extends Personaje {   

    public habilidadUnicaMago: string;   

    
    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaMago: string) { 
        super (nombre, nivel, puntosDeVida, ataque, defensa);  

        this.habilidadUnicaMago = HabilidadUnicaMago; 
    }    

    public Atacar(): void {
        console.log(" Estoy tirando un hechizo "); 
    } 

    public lanzarHabilidadUnica(): string {
        return `${this.nombre} lanza un hechizo usando ${this.habilidadUnicaMago}`;
    }    
   
}