import { HabitacionEstandar } from "./Estandar";
import { Suite } from "./Suite";
import { Servicio } from "./Servicio"; 

// CREAR HABITACION ESTANDAR
let habitacion1 = new HabitacionEstandar (1, 150);
let habitacion2 = new HabitacionEstandar (2, 150);   
console.log(habitacion1); 


// AGREGADO SUITE
let habitacionSuite1 = new Suite (3, 300); 
let habitacionSuite2 = new Suite (4, 300);  
console.log(habitacionSuite1); 

habitacion1.reservar();
console.log(habitacion1);  

// SERVICIO
let spa = new Servicio("SPA", 3000);  
habitacionSuite1.agregarServicio(spa); 
console.log(habitacionSuite1);  


habitacion1.agregarServicio(spa); 
console.log(habitacion1);  

console.log(habitacionSuite1.calcularCostoTotal()); // Costo de la suite + Servicios  





