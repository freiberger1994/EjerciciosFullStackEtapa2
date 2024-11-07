import { Personaje } from "./Personaje"; 
import { Guerrero } from "./guerrero";
import { Mago } from "./mago";  
import { Arquero } from "./arquero";
import { MagoEvolucionado } from "./MagoEvolucionado";  
import { GuerreroEvolucionado } from "./GuerreroEvolucionado";   
import { ArqueroEvolucionado } from "./ArqueroEvolucionado"; 
 

// Crear mago - guerrero - arquero
let guerrero = new Guerrero ("Joker", 100, 30, 15, 25, "Golpe de Fuego");
let mago = new Mago ("Twister Fate", 80, 10, 50, 10, "Bola de Fuego");     
let arquero = new Arquero ("Legolas", 90, 12, 58, 19, "Flechazo Venenoso");    
  
// Mago Simple 
console.log(mago.atacar());    
console.log(mago.defender());  
console.log(mago.lanzarHabilidadUnica());      

// Guerrero Simple 
console.log(guerrero.atacar());   
console.log(guerrero.defender());  
console.log(guerrero.lanzarHabilidadUnica());    

// Arquero Simple
console.log(arquero.atacar());   
console.log(arquero.defender());   
console.log(arquero.lanzarHabilidadUnica());  
  

// Crear MagoEvolucionado - GuerreroEvolucionado - ArqueroEvolucionado
let guerreroEvolucionado = new GuerreroEvolucionado("Rey Arturo", 200, 50, 75, 45, "Golpe de Aguila", "Giro de espada"); 
let magoEvolucionado = new MagoEvolucionado ("Gandalf", 202, 55, 80, 32,"Bola Fuego", "Supernova");    
let arqueroEvolucionado = new ArqueroEvolucionado ("Varus", 210, 55, 82, 34,"Flecha Venenosa", "Flecha Expansiva");   

// EJECUTAR ATACAR - DEFENDER - HABILIDADES UNICA/ESPECIAL  
console.log(magoEvolucionado.atacar());       
console.log(magoEvolucionado.defender());    
console.log(magoEvolucionado.lanzarHabilidadUnica());      
console.log(magoEvolucionado.lanzarHabilidadEspecial());     

console.log(guerreroEvolucionado.atacar());    
console.log(guerreroEvolucionado.defender());  
console.log(guerreroEvolucionado.lanzarHabilidadUnica());     
console.log(guerreroEvolucionado.lanzarHabilidadEspecial());     

console.log(arqueroEvolucionado.atacar());    
console.log(arqueroEvolucionado.defender());   
console.log(arqueroEvolucionado.lanzarHabilidadUnica());     
console.log(arqueroEvolucionado.lanzarHabilidadEspecial());       
 
 
 
