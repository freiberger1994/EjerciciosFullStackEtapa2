import { Habitacion } from "./Habitacion";
import { Servicio } from "./Servicio";

export class Suite extends Habitacion {
  constructor(numero: number, precioBase: number) { 
    super(numero, precioBase); 

    // Agregar servicios gratuitos específicos para suites
    this.servicios.push(new Servicio("Internet", 0));
    this.servicios.push(new Servicio("Televisión por cable", 0)); 
  }  

  // Implementación del cálculo de costo total para suite
  calcularCostoTotal(): number {
    let costoTotal = this.precioBase;
    this.servicios.forEach((servicio) => {
      costoTotal += servicio.costo;
    });
    return costoTotal; 
  }
}