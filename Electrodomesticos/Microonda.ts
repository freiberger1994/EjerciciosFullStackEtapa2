import { Electrodomestico } from "./Electrodomesticos";

 export class Microonda extends Electrodomestico { 

    private temperaturaActual: number = 0; 

    constructor(nombre: string, marca: string, precio: number) {
        super(nombre, marca, precio);
    } 


    funcionalidadEspecial(): void | string {   // Si esta encendido retorna String sino retorna Void
        if (!this.getEncendido()) 
            return 'El microonda está apagado' 
 
        const intervalo = setInterval(() => {   // funcion intervalo [ => ]
            if (this.temperaturaActual < 20) { 
                this.temperaturaActual += 10 
                console.log(`La temperatura del microonda es ${this.temperaturaActual}°C`)
            } else { 
                console.log('El microonda ha alcanzado la temperatura máxima')
                clearInterval(intervalo); //    LIMPIA/CORTA Intervalo
            }    
        }, 1000)  
    } 
}  