"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerrero_1 = require("./guerrero");
var mago_1 = require("./mago");
var arquero_1 = require("./arquero");
var MagoEvolucionado_1 = require("./MagoEvolucionado");
var GuerreroEvolucionado_1 = require("./GuerreroEvolucionado");
var ArqueroEvolucionado_1 = require("./ArqueroEvolucionado");
// Crear mago - guerrero - arquero
var guerrero = new guerrero_1.Guerrero("Joker", 100, 30, 15, 25, "Golpe de Fuego");
var mago = new mago_1.Mago("Twister Fate", 80, 10, 50, 10, "Bola de Fuego");
var arquero = new arquero_1.Arquero("Legolas", 90, 12, 58, 19, "Flechazo Venenoso");
// Mago Simple
console.log(mago.Atacar());
console.log(mago.Defender());
console.log(mago.lanzarHabilidadUnica());
// Guerrero Simple 
console.log(guerrero.Atacar());
console.log(guerrero.Defender());
console.log(guerrero.lanzarHabilidadUnica());
// Arquero Simple
console.log(arquero.Atacar());
console.log(arquero.Defender());
console.log(arquero.lanzarHabilidadUnica());
// Crear MagoEvolucionado - GuerreroEvolucionado - ArqueroEvolucionado
var guerreroEvolucionado = new GuerreroEvolucionado_1.GuerreroEvolucionado("Rey Arturo", 200, 50, 75, 45, "Golpe de Aguila", "Giro de espada");
var magoEvolucionado = new MagoEvolucionado_1.MagoEvolucionado("Gandalf", 202, 55, 80, 32, "Bola Fuego", "Supernova");
var arqueroEvolucionado = new ArqueroEvolucionado_1.ArqueroEvolucionado("Varus", 210, 55, 82, 34, "Flecha Venenosa", "Flecha Expansiva");
// EJECUTAR ATACAR - DEFENDER - HABILIDADES UNICA/ESPECIAL  
console.log(magoEvolucionado.Atacar());
console.log(magoEvolucionado.Defender());
console.log(magoEvolucionado.lanzarHabilidadUnica());
console.log(magoEvolucionado.lanzarHabilidadEspecial());
console.log(guerreroEvolucionado.Atacar());
console.log(guerreroEvolucionado.Defender());
console.log(guerreroEvolucionado.lanzarHabilidadUnica());
console.log(guerreroEvolucionado.lanzarHabilidadEspecial());
console.log(arqueroEvolucionado.Atacar());
console.log(arqueroEvolucionado.Defender());
console.log(arqueroEvolucionado.lanzarHabilidadUnica());
console.log(arqueroEvolucionado.lanzarHabilidadEspecial());
