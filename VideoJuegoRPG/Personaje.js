"use strict";
// CLASE BASE PERSONAJE
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    //protected habilidad:Habilidad;
    //protected puedeEvolucionar:boolean;
    function Personaje(nombre, nivel, PuntosDeVida, ataque, defensa) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.PuntosDeVida = PuntosDeVida;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    // Metodo DEFENDER
    Personaje.prototype.Defender = function () {
        console.log("El personaje esta defendiendo");
    };
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.getPuntosDeVida = function () {
        return this.PuntosDeVida;
    };
    Personaje.prototype.getAtaque = function () {
        return this.ataque;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    Personaje.prototype.setPuntosDeVida = function (puntosDeVida) {
        this.PuntosDeVida = puntosDeVida;
    };
    Personaje.prototype.setAtaque = function (puntosDeVida) {
        this.PuntosDeVida = puntosDeVida;
    };
    Personaje.prototype.devolverDatos = function () {
        return ("Nombre: ".concat(this.nombre, ", Nivel: ").concat(this.nivel, " Vida: ").concat(this.PuntosDeVida));
    };
    return Personaje;
}());
exports.Personaje = Personaje;
