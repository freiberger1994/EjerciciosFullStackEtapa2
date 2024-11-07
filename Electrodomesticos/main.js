"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lavarropa_1 = require("./Lavarropa");
var Microonda_1 = require("./Microonda");
var Refrigerador_1 = require("./Refrigerador");
// Crear lavarropa, microonda y Refrigerador
var lavarropa1 = new Lavarropa_1.Lavarropa("lavarropa", "Coinor", 350, 45);
var microonda1 = new Microonda_1.Microonda("microonda", "ATMA", 250);
var refrigerador1 = new Refrigerador_1.Refrigerador("refrigerador", "Whirpoll", 510);
// ENCENDIDO
lavarropa1.encender();
microonda1.encender();
refrigerador1.encender();
// FUNCIONALIDADES ELECTRODOMESTICOS
lavarropa1.actualizarSoftware();
refrigerador1.activarInternet();
refrigerador1.actualizarSoftware();
// METODOS ESPECIALES
lavarropa1.funcionalidadEspecial();
microonda1.funcionalidadEspecial();
refrigerador1.funcionalidadEspecial();
