import { Electrodomestico } from "./Electrodomesticos";

export class Refrigerador extends Electrodomestico { 

    private dispensorDeAgua: boolean = true;
    private nivelDeAgua: number = 100;

    constructor(nombre: string, marca: string, precio: number) {
        super(nombre, marca, precio); 
       
    } 

    public funcionalidadEspecial(): void {
        if (this.dispensorDeAgua && this.nivelDeAgua > 10) { //Si existe Disp. de agua y su nivel es mayor a 10, sirve agua
            this.nivelDeAgua -= 10; 
            console.log("Podes servir agua"); 
        } else {  
            console.log("No podes servir agua");
        }      
    } 

    public cargarAgua (): void {
        if (this.nivelDeAgua < 100) {
            this.nivelDeAgua = 100;
            console.log("Tanque lleno de agua");
        } else {
            console.log("El tanque ya esta lleno");
        }   
    } 

}