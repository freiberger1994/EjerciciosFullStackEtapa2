import { Vehiculo } from "./Vehiculo";

export class Camiones {
    constructor(
        
        public acoplado: boolean, // variable distinta 
       
    ) {}    

    public getAcoplado(): boolean {  
        return this.acoplado;
    }
     
}