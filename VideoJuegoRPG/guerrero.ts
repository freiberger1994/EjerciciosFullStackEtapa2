import { Personaje } from "./Personaje"; 

export class Guerrero extends Personaje {  
 
    public HabilidadUnicaGuerrero: string; 

    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaGuerrero: string) { 
      
      super (nombre, nivel, puntosDeVida, ataque, defensa);
      this.HabilidadUnicaGuerrero = HabilidadUnicaGuerrero;
    }  

    public Atacar(): void {
      console.log(" Estoy pegando un espadazo "); 
    } 
  
    public lanzarHabilidadUnica(): string { 
      return `${this.nombre} usa su habilidad especial: ${this.HabilidadUnicaGuerrero}!`; 
    }       
  
}