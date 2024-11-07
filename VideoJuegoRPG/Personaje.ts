// CLASE BASE PERSONAJE

export abstract class Personaje {

    protected nombre: string; 
    protected nivel: number;
    protected PuntosDeVida:number;
    protected ataque:number;
    protected defensa:number; 

    constructor (nombre:string, nivel: number, PuntosDeVida:number, ataque:number, defensa:number) {  
        this.nombre = nombre;
        this.nivel = nivel;
        this.PuntosDeVida = PuntosDeVida;
        this.ataque = ataque;
        this.defensa = defensa;
    }        
 
    // Metodo ATACAR 
    public abstract atacar(): void  
     
    // Metodo DEFENDER
    public defender(): void {
        console.log("El personaje esta defendiendo");
    }  

    public getNombre(): string { 
        return this.nombre;
    }   

    public getNivel(): number {  
        return this.nivel;
    } 
    
    public getPuntosDeVida(): number {   
        return this.PuntosDeVida;
    }

    public getAtaque(): number {   
        return this.ataque;
    }

    public setNombre(nombre: string): void { 
        this.nombre = nombre;
    }   

    public setNivel(nivel: number): void {     
        this.nivel = nivel;
    } 
    
    public setPuntosDeVida(puntosDeVida: number): void {   
       this.PuntosDeVida = puntosDeVida;
    } 

    public setAtaque(puntosDeVida: number): void {   
        this.PuntosDeVida = puntosDeVida;
     }  

    public devolverDatos(): string {
    return (`Nombre: ${this.nombre}, Nivel: ${this.nivel} Vida: ${this.PuntosDeVida}`);

    }     

}
   