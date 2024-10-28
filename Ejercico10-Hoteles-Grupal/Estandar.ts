import { Habitacion } from "./Habitacion"

export class Estandar extends Habitacion {

private internet: boolean = true;  
private desayuno: boolean = true;  


constructor (numero:number, precioBase:number, cantidadDias:number) {
super (numero, precioBase, cantidadDias)
 
}
 
public calcularCosto (): number {    // COSTO HABITACION ESTANDAR

    let precioTotal =  this.precioBase * this.cantidadDias;
    return precioTotal;  
}

// 
 
}