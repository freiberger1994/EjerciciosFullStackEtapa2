import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor { 

    private ListaVehiculos: Vehiculo[]; // array que almacena los vehiculos 
 
    // METODOS 
    constructor (ListaVehiculos: Vehiculo[]) {
        this.ListaVehiculos = ListaVehiculos;
    }  

    public agregarVehiculo (vehiculo: Vehiculo) : void {
        this.ListaVehiculos.push(vehiculo);
    }  

    // Obtener vehiculo en el Registro por Patente y buscar en arreglo de vehiculos uno con la misma patente.
    // Find: sirve para encontrar un elemento en un arreglo.

    public obtenerVehiculo (patente:string): Vehiculo | undefined {
        return this.ListaVehiculos.find (vehiculo => vehiculo.getPatente() == patente ); // encontrar 
    }   
    
    // Encontrar Vehiculo - Modificar atributos 

    public modificarVehiculo (patente: string, nuevaMarca: string, nuevoModelo: string, nuevoAnio: number): void {  
        const vehiculo = this.obtenerVehiculo(patente); // Encuentra el vehículo 
            
        if (vehiculo) {  
            if (nuevaMarca) vehiculo.setMarca(nuevaMarca); // Modifica la marca 
            if (nuevoModelo) vehiculo.setModelo(nuevoModelo); // Modifica el modelo 
            if (nuevoAnio) vehiculo.setAnio(nuevoAnio); // Modifica el año 
        } else { 
            console.log("Vehículo no encontrado."); 
               }
        }   

    public darDeBaja(patente: string): void { 

        const vehiculoEncontrado = this.obtenerVehiculo(patente); 
            if (vehiculoEncontrado) {
                this.ListaVehiculos.splice(this.ListaVehiculos.indexOf(vehiculoEncontrado), 1); // te da el indice del objeto encontrado
            }
             else {  
                console.log("Vehículo no encontrado.");
            } 
        }  
        
    // Mostrar todos los vehículos
    public mostrarVehiculos(): void {
            this.ListaVehiculos.forEach((vehiculo, indice) => {
                console.log(`${indice}: ${vehiculo.devolverDatos()}`);
            }); 
        }  
    }  

