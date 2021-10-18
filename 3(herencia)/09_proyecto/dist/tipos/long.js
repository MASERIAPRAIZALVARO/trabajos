"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Long = void 0;
const skate_1 = require("./skate");
class Long extends skate_1.Skate {
    constructor(_largo, _marca, _ancho, _ejes, _ruedas, _rodamientos, _tornilleria) {
        super(_marca, _ancho, _ejes, _ruedas, _rodamientos, _tornilleria);
        this._largo = _largo;
        this._marca = _marca;
        this._ancho = _ancho;
        this._ejes = _ejes;
        this._ruedas = _ruedas;
        this._rodamientos = _rodamientos;
        this._tornilleria = _tornilleria;
    }
    get largo() {
        return this._largo;
    }
    set largo(_largo) {
        this._largo == _largo;
    }
    precio_total() {
        let precio;
        precio = super.precio_total();
        if (this._largo > 110) {
            precio += 20;
        }
        else if (this.largo <= 110) {
            precio += 10;
        }
        return precio;
    }
}
exports.Long = Long;
