import { Personaje } from "./Personaje"; 
import { Arquero } from "./arquero";

export class ArqueroEvolucionado extends Arquero {  
 
    public HabilidadEspecialArquero: string;   

    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaArquero:string, HabilidadEspecialArquero: string) { 
      
      super (nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaArquero); 
      this.HabilidadEspecialArquero = HabilidadEspecialArquero;  
      this.ataque += 45;
    }     

    public atacar(): void { 
      console.log(" Estoy pegando un espadazo "); 
    }    
   
    public lanzarHabilidadEspecial(): string {  
      return `${this.nombre} usa su habilidad especial: ${this.HabilidadEspecialArquero}!`;   
    }      
    
}