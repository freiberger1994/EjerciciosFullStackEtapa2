import { Vehiculo } from "./Vehiculo";

export class Autos extends Vehiculo {
    public puerta: string; // variable distinta

    constructor (patente:string, tipoVehiculo:string, puerta:string) {
        
      super (patente, tipoVehiculo);
      this.puerta = puerta; 

    } 
    // falta set 


    public getPuerta(): string {  // Trae el modelo
        return this.puerta;
    } 
    
    public setPuerta(puerta:string): void {
      this.puerta = puerta;
    }
    
}

