"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skate = void 0;
const marcas_1 = require("../superclass/marcas");
class Skate extends marcas_1.marcas {
    constructor(_marca, _ancho, _ejes, _ruedas, _rodamientos, _tornilleria) {
        super(_marca);
        this._ancho = _ancho;
        this._ejes = _ejes;
        this._ruedas = _ruedas;
        this._rodamientos = _rodamientos;
        this._tornilleria = _tornilleria;
    }
    set marca(_marca) {
        this._marca = _marca;
    }
    get marca() {
        return this._marca;
    }
    get ancho() {
        return this._ancho;
    }
    set ancho(_ancho) {
        this._ancho = _ancho;
    }
    get ejes() {
        return this._ejes;
    }
    set ejes(_ejes) {
        this._ejes = _ejes;
    }
    get ruedas() {
        return this._ruedas;
    }
    set ruedas(_ruedas) {
        this._ejes = _ruedas;
    }
    get rodamientos() {
        return this._rodamientos;
    }
    set rodamientos(_rodamientos) {
        this._rodamientos = _rodamientos;
    }
    get tornilleria() {
        return this._tornilleria;
    }
    set tornilleria(_tornilleria) {
        this._tornilleria = _tornilleria;
    }
    precio_ancho() {
        let precio1 = 0;
        if (this.ancho <= 8.25) {
            precio1 = precio1 + 40;
        }
        else if (this.ancho > 8.25) {
            precio1 = precio1 + 50;
        }
        return precio1;
    }
    precio_ejes() {
        let precio2 = 0;
        // 130 para tablas <7.5, 140 entre 7.5-8.5, 150 >8.5
        if (this._ejes == 130) {
            precio2 = precio2 + 43;
        }
        else if (this._ejes == 140) {
            precio2 = precio2 + 56;
        }
        else if (this._ejes == 150) {
            precio2 = precio2 + 77;
        }
        return precio2;
    }
    precio_ruedas() {
        let precio3 = 0;
        if (this._ruedas <= 56) {
            precio3 = precio3 + 35;
        }
        else if (this._ruedas > 56) {
            precio3 = precio3 + 40;
        }
        return precio3;
    }
    precio_torilleria() {
        let precio4 = 0;
        if (this._tornilleria == 'negro') {
            precio4 = precio4 + 5;
        }
        else if (this._tornilleria == 'blanco') {
            precio4 = precio4 + 7;
        }
        return precio4;
    }
    precio_rodamientos() {
        let precio5 = 0;
        if (this.rodamientos == 'metal') {
            precio5 = precio5 + 5;
        }
        else if (this.rodamientos == 'cerámica') {
            precio5 = precio5 + 5;
        }
        return precio5;
    }
    precio_total() {
        let precio = 0;
        precio = this.precio_rodamientos() + this.precio_ancho()
            + this.precio_ejes() + this.precio_torilleria()
            + this.precio_ruedas();
        precio = precio + (precio * this.iva_marca);
        return precio;
    }
}
exports.Skate = Skate;
