import { Servicio } from "./Servicio";

// Clase abstracta para las habitaciones
export abstract class Habitacion {
  protected numero: number;
  protected estado: string;
  protected precioBase: number;    // Atraviesa todas las inst de Habitacion 
  protected servicios: Servicio[] = []; 

  constructor(numero: number, precioBase: number) {
    this.numero = numero;
    this.precioBase = precioBase; 
    this.estado = "disponible";  // definimos estado aca 
  }  

  // CAMBIAR PRECIO BASE STATIC 

  reservar(): void {        // PASARLO BOOLEAN
    if (this.estado == "disponible") {
      this.estado = "ocupada";
    } else {
      console.log(`La habitación ${this.numero} ya está ocupada.`);
    } 
  } 

  liberar(): void { 
    if (this.estado == "ocupada") { 
      this.estado = "disponible";
    } else {
      console.log(`La habitación ${this.numero} ya está disponible.`);
    }
  } 

  // Método abstracto para calcular el costo total
  abstract calcularCostoTotal(): number; 

  // Método para agregar un servicio adicional
  agregarServicio(servicio: Servicio): void {   // CONTROLAR QUE NO EXISTAR EN EL ARREGLO QUE TENEMOS
    this.servicios.push(servicio);
  }

  // Método para quitar un servicio de habitación
  quitarServicio(servicioNombre: string): void {
    this.servicios = this.servicios.filter(         // VER - NO REEMPLAZAR EL SERVICIO QUE YA TENGO 
      (servicio) => servicio.nombre !== servicioNombre
    );   
  }

  // Métodos getter para acceder a los atributos protegidos
  public getNumero(): number {
    return this.numero;
  }

  public getEstado(): string {
    return this.estado;
  }

  public getPrecioBase(): number {
    return this.precioBase;
  }

  public getServicios(): Servicio[] {
    return this.servicios;
  }
}