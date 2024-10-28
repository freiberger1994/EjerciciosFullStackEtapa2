import { Habitacion } from "./Habitacion"

export class Suite extends Habitacion {

    private internet: boolean = true;
    private desayuno: boolean = true;
    protected spa: boolean = true;
    protected salaEntrenamiento: boolean = false; 


constructor (numero:number, precioBase:number, cantidadDias:number) {
super (numero, precioBase, cantidadDias)
 
} 


public calcularCosto (): number {    // COSTO HABITACION ESTANDAR

    let precioTotal =  this.precioBase * 2;
    return precioTotal;

} 




}