import { Personaje } from "./Personaje"; 
import { Guerrero } from "./guerrero";
import { Mago } from "./mago";  
import { GuerreroEvolucionado } from "./GuerreroEvolucionado";
import { MagoEvolucionado } from "./MagoEvolucionado";


// Crear mago - guerrero - arquero
let guerrero = new Guerrero ("Joker", 100, 30, 15, 25, "Golpe de Fuego");
let mago = new Mago ("Twister Fate", 80, 10, 50, 10, "Bola de Fuego");  

// Mostrar información y habilidades  
console.log(guerrero.devolverDatos()); 
console.log(guerrero.habilidadEspecial()); 
console.log(mago.devolverDatos());  
console.log(mago.lanzarHabilidadEspecial());   



// let guerreroEvolucionado = new GuerreroEvolucionado("Joker", 100, 30);
// 

// EJECUTAR ATACAR
// EJECUTAR DEFENDER 