import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class HabitacionEstandar extends Habitacion {
  constructor(numero: number, precioBase: number) {
    super(numero, precioBase);
  } 

  // Implementación del cálculo de costo total para habitación estándar
  calcularCostoTotal(): number {
    let costoTotal = this.precioBase;
    this.servicios.forEach((servicio) => { // Recorre el array de Servicio y agrega precio al Precio Base
      costoTotal += servicio.costo; 
    }); 
    return costoTotal;   
  } 

}