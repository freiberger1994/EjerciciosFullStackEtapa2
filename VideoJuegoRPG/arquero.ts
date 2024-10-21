import { Personaje } from "./Personaje";

class Arquero extends Personaje {  

    public flechazoVenenoso: string; 
    public tipoArquero: string; 
    //habilidadMejorada:Habilidad;

    constructor (nombre:string, nivel:number, puntosDeVida:number, ataque:number, defensa:number, flechazoVenenoso:string,tipoArquero: string ) {  
            super (nombre, nivel, puntosDeVida, ataque, defensa);
            this.flechazoVenenoso = flechazoVenenoso; 
            this.tipoArquero = tipoArquero;
        }   

        public Atacar(): void {
            console.log("Estoy tirando flechazos"); 
        } 
        
        public setTipoArquero (tipoArquero: string) {
            this.tipoArquero = tipoArquero; 
        } 
    
        public setflechazoVenenoso (flechazoVenenoso: string): void {  
            this.flechazoVenenoso = flechazoVenenoso;
        }  
        public getflechazoVenenoso(): string {  
            return this.flechazoVenenoso;
        }    
   
      // Modificar
      public modificarArquero (nombre:string, nivel:number, puntosDeVida:number, flechazoVenenoso:string): void {
          this.setNombre(nombre);
          this.setNivel(nivel);
          this.setPuntosDeVida(puntosDeVida); 
          this.setflechazoVenenoso(flechazoVenenoso);
      } 
}