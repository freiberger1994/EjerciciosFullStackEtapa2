import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {      // Moto hereda de Vehiculo
    
    public cilindrada: string; 


    constructor(patente:string, tipoVehiculo: string, cilindrada:string) {  

      super (patente, tipoVehiculo);
      this.cilindrada = cilindrada;
    } 
     
    public setTipoMoto (tipoMoto:string) {
        this.tipoVehiculo = tipoMoto; 
    }
 
    public getCilindrada(): string {  // Trae el modelo
        return this.cilindrada;
    }  

    public setCilindrada(cilindrada:string): void {  // Trae el modelo
        this.cilindrada = cilindrada;
    }   
 
    // Modificar MOTO
    public modificarMoto (patente:string, marca: string, modelo:string, anio:number, cilindrada:string): void {
        this.setPatente(patente);
        this.setModelo(modelo);
        this.setMarca(marca); 
        this.setAnio(anio); 
        this.setCilindrada(cilindrada);
    }
    
}