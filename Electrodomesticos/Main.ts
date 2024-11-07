import { Lavarropa } from "./Lavarropa";
import { Microonda } from "./Microonda";
import { Refrigerador } from "./Refrigerador";

// Crear lavarropa, microonda y Refrigerador

let lavarropa1 = new Lavarropa ("lavarropa", "Coinor", 350, 45);
let microonda1 = new Microonda ("microonda", "ATMA", 250);  
let refrigerador1 = new Refrigerador ("refrigerador", "Whirpoll", 510);

// ENCENDIDO
lavarropa1.encender();
microonda1.encender(); 
refrigerador1.encender(); 

// FUNCIONALIDADES ELECTRODOMESTICOS
lavarropa1.actualizarSoftware(); 

console.log("Conectando lavarropa internet")
refrigerador1.activarInternet();  

refrigerador1.actualizarSoftware();

// METODOS ESPECIALES 

lavarropa1.funcionalidadEspecial();
microonda1.funcionalidadEspecial();
refrigerador1.funcionalidadEspecial();   






