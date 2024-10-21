import { Personaje } from "./Personaje";
import { Mago } from "./mago";  

export class MagoEvolucionado extends Mago { 

    // escudo energia // tipo de escudo // funcion activar escudo // console.log (los muestro) 
    
    constructor(nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaMago: string) {

      super(nombre, nivel, puntosDeVida, ataque, defensa, HabilidadUnicaMago);
      this.ataque += 20; // ( += ) Incrementa el valor de una variable con otro valor
    }     
  
    habilidadEspecial(): string { 
      return `${this.nombre} usa su habilidad especial mejorada: !`;
    }  

  } 