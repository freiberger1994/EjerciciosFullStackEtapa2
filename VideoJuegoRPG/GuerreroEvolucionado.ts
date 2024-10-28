import { Personaje } from "./Personaje"; 
import { Guerrero } from "./guerrero";

export class GuerreroEvolucionado extends Guerrero {  
 
    public HabilidadEspecialGuerrero: string;  

    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaGuerrero: string, HabilidadEspecialGuerrero: string) { 
      
      super (nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaGuerrero);  
      this.HabilidadEspecialGuerrero = HabilidadEspecialGuerrero;
      this.ataque += 32;
    }   

    public Atacar(): void { 
      console.log(" Estoy pegando un espadazo ");    
    } 
  
    public lanzarHabilidadEspecial(): string { 
      return `${this.nombre} usa su habilidad especial: ${this.HabilidadEspecialGuerrero}!`;  
    }       
   
}