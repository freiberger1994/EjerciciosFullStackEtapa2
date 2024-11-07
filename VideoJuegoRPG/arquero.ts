import { Personaje } from "./Personaje";

export class Arquero extends Personaje {  
 
    public HabilidadUnicaArquero: string;  
    

    constructor (nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, HabilidadUnicaArquero: string) {  
            super (nombre, nivel, puntosDeVida, ataque, defensa); 
            this.HabilidadUnicaArquero = HabilidadUnicaArquero;
        }     

        public atacar(): void {
            console.log("Estoy tirando flechazos"); 
        }    

        public lanzarHabilidadUnica(): string { 
            return `${this.nombre} usa su habilidad especial: ${this.HabilidadUnicaArquero}!`;  
          }        

}