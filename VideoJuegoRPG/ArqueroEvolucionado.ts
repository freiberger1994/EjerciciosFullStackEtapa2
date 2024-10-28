import { Personaje } from "./Personaje"; 
import { Arquero } from "./arquero";

export class ArqueroEvolucionado extends Arquero {  
 
    public HabilidadUnicaArquero: string;   

    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaArquero: string) { 
      
      super (nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaArquero); 
      this.HabilidadUnicaArquero = HabilidadUnicaArquero;  
      this.ataque += 45;
    }     

    public Atacar(): void { 
      console.log(" Estoy pegando un espadazo "); 
    }  
   
    public lanzarHabilidadEspecial(): string {  
      return `${this.nombre} usa su habilidad especial: ${this.HabilidadUnicaArquero}!`;  
    }      
    
}