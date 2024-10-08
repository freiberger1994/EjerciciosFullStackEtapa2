import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {

    public acoplado: boolean; // variable distinta 

    constructor (patente:string, tipoVehiculo:string, acoplado:boolean) { 

        super(patente,tipoVehiculo);  
        this.acoplado = acoplado; 
    }     

    public setTipoCamion (tipoCamion:string) {
        this.tipoVehiculo = tipoCamion; 
    } 
    public setAcoplado (acoplado: boolean): void {  // Trae el modelo
        this.acoplado = acoplado;
    }    
    public getAcoplado(): boolean {  
        return this.acoplado;
    }

    public modificarCamion (patente:string, marca: string, modelo:string, anio:number, acoplado:boolean): void {
        this.setPatente(patente);
        this.setModelo(modelo);
        this.setMarca(marca); 
        this.setAnio(anio);  
        this.setAcoplado(acoplado);
    } 
   
}