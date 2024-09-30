import { Vehiculo } from "./Vehiculo";

export class Motos {
    constructor(
        public cilindrada: string, // variable distinta
       
    ) {}  
 
   
    public getCilindrada(): string {  // Trae el modelo
        return this.cilindrada;
    } 
 
}