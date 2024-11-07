import { Electrodomestico } from "./Electrodomesticos";

export class Lavarropa extends Electrodomestico { 

private cargaMaxima: number = 50;
private cargaDeRopa: number;
 

constructor (nombre:string, marca:string, precio:number, cargaDeRopa:number) {

    super (nombre, marca, precio);
    this.cargaDeRopa = cargaDeRopa; 
}   

public funcionalidadEspecial (): void {
    
    if (this.cargaDeRopa > this.cargaMaxima) {
        console.log("Superaste el peso maximo");
    } else {
        console.log("El lavado comenzo con exito");
    }   
}    

public cambiarPeso (cargaDeRopa:number): void {
    this.cargaDeRopa = cargaDeRopa;
}  


}