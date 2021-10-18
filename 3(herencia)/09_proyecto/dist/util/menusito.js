"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const entradaTeclado_1 = require("../util/entradaTeclado");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
    let numero;
    console.log('Pofavor elija una de las siguientes opciones para continuar \n 1-- Nuevo skate \n 2-- Nuevo long \n 3-- Mostrar skate \n 4-- Mostrar long ');
    console.log(' 5-- Actualizar skate \n 6-- Actualizar long \n 29 --exit');
    numero = parseInt(yield (0, entradaTeclado_1.leerTeclado)(''));
    return numero;
});
exports.menu = menu;
