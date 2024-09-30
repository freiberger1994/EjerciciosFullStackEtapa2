import { Vehiculo } from "./Vehiculo";

export class Autos {
    constructor( 
        public puerta: string, // variable distinta
    ) {}   


    public getPuerta(): string {  // Trae el modelo
        return this.puerta;
    } 
    
}

