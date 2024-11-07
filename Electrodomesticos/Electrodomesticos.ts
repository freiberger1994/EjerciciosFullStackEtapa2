export abstract class Electrodomestico {

private nombre: string; 
private marca: string;  
private precio: number; 
private internet: boolean = false;
private encendido: boolean = false; 

constructor(nombre:string, marca:string, precio:number) {

this.nombre = nombre;
this.marca = marca; 
this.precio = precio;

}  

public encender() { 
    if (!this.encendido) {
        this.encendido = true;
        console.log(`El electrodomestico ${this.nombre} encendio`);
    } else {
        console.log("El electrodomestico ya esta encendido");
    }    
}    

public apagar() {
    if (this.encendido) {
        this.encendido = false; 
        console.log("El electrodomestico se apago.");
    } else {
        console.log("El electrodomestico esta apagado.")
    }  
}

public activarInternet() { 
    if (!this.internet) { 
        this.internet = true;
        console.log("El electrodomestico tiene conexion a internet.");
    } else {
        console.log("El electrodomestico ya esta conectado a internet.");
    }
}

public actualizarSoftware(): void {
    if (this.internet) {
        console.log(`El software de ${this.nombre} fue actualizado`)
    } else {
        console.log(`${this.nombre} no cuenta con conexión a internet`)
    } 
} 

abstract funcionalidadEspecial (): void; // FUNCIONALIDAD ESPECIAL  
  
getNombre() {
    return this.nombre;
}
setNombre(nombre:string) {
    this.nombre = nombre;
}
getPrecio() {
    return this.precio;
}
setPrecio(precio:number) {
    this.precio = precio;
}
getMarca() {
    return this.marca;
}
setMarca(marca:string) {
    this.marca = marca;
}
getEncendido() {
    return this.encendido;
}
setEncendido(encendido) {
    this.encendido = encendido;
}
getInternet() {
    return this.internet;
}
setInternet(internet) {
    this.internet = internet;
} 

}

