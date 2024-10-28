import { Personaje } from "./Personaje";
import { Mago } from "./mago";  

export class MagoEvolucionado extends Mago { 

  public HabilidadEspecialMago: string;  
    // escudo energia // tipo de escudo // funcion activar escudo // console.log (los muestro) 
    
    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaMago:string, HabilidadEspecialMago: string) {

      super (nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaMago);
      this.HabilidadEspecialMago = HabilidadEspecialMago; 
      this.ataque += 20; // ( += ) Incrementa el valor de una variable con otro valor 
    }        

    public lanzarHabilidadEspecial(): string { 
      return `${this.nombre} lanza un hechizo usando ${this.HabilidadEspecialMago}`; 
    }     

  } 