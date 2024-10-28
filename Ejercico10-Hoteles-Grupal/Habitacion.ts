import { Servicio } from "./Servicio";

export abstract class Habitacion {

    protected numero: number;
    protected precioBase: number;
    protected disponible: boolean = true;
    protected cantidadDias: number;
    protected listaServicios: string[];   
    


    constructor (numero:number, precioBase:number, cantidadDias:number) {
        this.numero = numero;
        this.precioBase = precioBase;  
        this.cantidadDias = cantidadDias;
    }  
  
    abstract calcularCosto (): number;     

    public determinarServicio(): void {

    } 

    public agregarServicio(servicio: string): void { 
        this.listaServicios.push(servicio);   
    }   

    public Reservar (): void {
        if (this.disponible) {
            this.disponible = false;
            console.log("Se reservo la habitacion");
        } else {
            console.log("No esta disponible"); 
        } 
    } 

    public Liberar (): void {
        if (!this.disponible) {
            this.disponible = true;
            console.log("Se libero la habitacion");
        } else {
            console.log("Esta libre la habitacion"); 
        } 
    } 

    public getNumero (): number {
        return this.numero;
    }

    public getPrecioBase (): number {
        return this.precioBase;
    }  

    public setNumero (numero:number): void {
        this.numero = numero;
    } 

    public setPrecioBase (precioBase:number): void {
        this.precioBase = precioBase;
    } 


}
