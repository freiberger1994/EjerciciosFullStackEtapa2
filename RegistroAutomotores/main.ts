import { Vehiculo } from "./Vehiculo";
import { RegistroAutomotor } from "./RegistroAutomotor"; 
import { Moto } from "./moto";

// Crear Auto / Moto / Camion

const vehiculo1 = new Vehiculo ("2234","Auto"); 
console.log(vehiculo1);
const vehiculo2 = new Vehiculo ("2134","Moto");
console.log(vehiculo2);
const vehiculo3 = new Vehiculo ("1983","Camion");
console.log(vehiculo3);

// Crear un 4 nuevo Vehiculo vacio
const vehiculo4 = new Vehiculo(" ", " ");


vehiculo3.setTipoVehiculo(" ");

// Metodos MOTO 
const moto1 = new Moto ("1122 ","Tornado", "125"); 
const camion1 = new Moto ("1122 ","SCANIA", "250");  

moto1.setTipoMoto("Twister");   
moto1.setCilindrada("220"); 


// Modelo 
vehiculo1.setModelo("Toyota Corolla");
vehiculo1.setMarca("version Full");

vehiculo2.setModelo("Tornado");
vehiculo2.setMarca("220");  

vehiculo3.setModelo("IVECO"); 
vehiculo3.setMarca("360 full"); 


// Registro de los 3 vehiculos
let registroAutomotor1 = new RegistroAutomotor ([vehiculo1, vehiculo2, vehiculo3, vehiculo4, moto1]);  

//Eliminar - Dar de baja 
registroAutomotor1.darDeBaja("2234");  // lo elimino por la patente

// Modificar
registroAutomotor1.modificarVehiculo("1983", "SCANIA","360", 2024);

// agregar vehiculo 
registroAutomotor1.agregarVehiculo(vehiculo4);
console.log (vehiculo4);

// mostrarDatos 
registroAutomotor1.mostrarVehiculos();    







