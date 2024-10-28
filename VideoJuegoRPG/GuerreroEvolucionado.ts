import { Personaje } from "./Personaje"; 
import { Guerrero } from "./guerrero";

export class GuerreroEvolucionado extends Guerrero {  
 
    public HabilidadUnicaGuerrero: string;  

    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaGuerrero: string) { 
      
      super (nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaGuerrero);  
      this.HabilidadUnicaGuerrero = HabilidadUnicaGuerrero;
    }   

    public Atacar(): void { 
      console.log(" Estoy pegando un espadazo ");  
    } 
  
    public lanzarHabilidadEspecial(): string { 
      return `${this.nombre} usa su habilidad especial: ${this.HabilidadUnicaGuerrero}!`; 
    }       
   
}