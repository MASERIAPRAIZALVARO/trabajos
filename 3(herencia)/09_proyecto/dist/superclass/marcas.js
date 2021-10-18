"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcas = void 0;
class marcas {
    constructor(_marca) {
        this._marca = _marca;
    }
    get marca() {
        return this._marca;
    }
    set marca(_marca) {
        this._marca = _marca;
    }
    get iva_marca() {
        let iva;
        if (this._marca == 'Santa cruz') {
            iva = 0.4;
        }
        if (this._marca == 'Element') {
            iva = 0.2;
        }
        if (this._marca == 'Creature') {
            iva = 0.3;
        }
        if (this._marca == 'family') {
            iva = 0.1;
        }
        else {
            iva = 0.5;
        }
        return iva;
    }
}
exports.marcas = marcas;
