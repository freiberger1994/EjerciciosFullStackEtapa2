// GET = Permite leer el valor de una propiedad privada desde fuera de la clase.
// SET = Permite modificar el valor de una propiedad privada desde fuera de la clase.

export class Vehiculo { 
  
    protected patente: string;
    protected marca: string;
    protected modelo:string;
    protected anio: number; 
    protected tipoVehiculo:string;

 
    constructor (patente:string, tipoVehiculo:string) {
        this.patente = patente;
        this.tipoVehiculo = tipoVehiculo;
    }     
    
    public getTipoVehiculo(): string { 
        return this.tipoVehiculo;
    } 
    // TIPO VEHICULO
    public setTipoVehiculo(tipoVehiculo:string): void { 
        this.tipoVehiculo = tipoVehiculo;
    }  

    // GET
    public getPatente(): string { 
        return this.patente;
    }  

    public getAnio(): number {  
        return this.anio;
    } 
    
    public getMarca(): string {   // Trae la marca
        return this.marca;
    }

    public getModelo(): string {  // Trae el modelo
        return this.modelo;
    }  

    public setPatente(patente: string): void { 
        this.patente = patente;
    }  

    public setAnio(anio: number): void {     
        this.anio = anio;
    } 
    
    public setMarca(marca: string): void {   // Modificar
       this.marca = marca;
    }

    public setModelo(modelo: string): void {  
        this.modelo = modelo;
    }   
    
    public devolverDatos(): string {
    return (`${this.getPatente()} esta es la patente: ${this.getMarca()} la marca es:,  ${this.getModelo()} ${this.getAnio()}el año es:}${this.getTipoVehiculo()}`);

    }
    
}