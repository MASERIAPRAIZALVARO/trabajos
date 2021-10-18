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
const entradaTeclado_1 = require("./util/entradaTeclado");
const skate_1 = require("./tipos/skate");
const long_1 = require("./tipos/long");
const menusito_1 = require("./util/menusito");
const new_skate = () => __awaiter(void 0, void 0, void 0, function* () {
    let skate;
    const marca = yield ((0, entradaTeclado_1.leerTeclado)('introduzca la marca deseada  \n Santa cruz \n Element \n Creature \n family \n'));
    const ancho = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija el ancho de la tabla,\n este depende del tamaño de su pie asi como: \n numero de pie -- ancho \n <37 -- <8 \n 37/42 -- 8/8.5 \n 42> -- 8.5> \n'));
    const ejes = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija los ejes:\n Ancho tabla -- Numero de eje \n < 7.5 -- 130 \n 7.5< x <8.5 -- 140 \n 8.5 > -- 150'));
    const ruedas = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija las ruedas: \n para patinar street -- <56 \n para patinar bowl 56>'));
    const rodamientos = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo: \n rodamientos de metal \n  rodamientos de cerámica');
    const tornilleria = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo:\n tornilleria blnaca \n tornilleria negra');
    skate = new skate_1.Skate(marca, ancho, ejes, ruedas, rodamientos, tornilleria);
    return skate;
});
const show_skate = (show) => {
    if (show != undefined) {
        console.log(`La marca es ${show.marca}`);
        console.log(`El ancho es ${show.ancho}`);
        console.log(`Los ejes son de tipo: ${show.ejes}`);
        console.log(`La marca son de grosor: ${show.ruedas}mm`);
        console.log(`La rodamientos son de: ${show.rodamientos}`);
        console.log(`La marca es de color: ${show.tornilleria}`);
        console.log(`El precio total es: ${show.precio_total()}`);
    }
    else {
        console.log('no has creado el skate');
    }
};
const new_long = () => __awaiter(void 0, void 0, void 0, function* () {
    let long;
    const largo = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Defina el largo del long porfavor \n <110 -- long corto \n >110 -- long largo'));
    const marca = yield ((0, entradaTeclado_1.leerTeclado)('introduzca la marca deseada  \n Santa cruz \n Element \n Creature \n family \n'));
    const ancho = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija el ancho de la tabla,\n este depende del tamaño de su pie asi como: \n numero de pie -- ancho \n <37 -- <8 \n 37/42 -- 8/8.5 \n 42> -- 8.5> \n'));
    const ejes = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija los ejes:\n Ancho tabla -- Numero del eje \n < 7.5 -- 130 \n 7.5< x <8.5 -- 140 \n 8.5 > -- 150'));
    const ruedas = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija las ruedas: \n para patinar street -- <56 \n para patinar bowl 56>'));
    const rodamientos = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo: \n  rodamientos de metal \n  rodamientos de cerámica');
    const tornilleria = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo tornilleria blaca \n   tornilleria negra');
    long = new long_1.Long(largo, marca, ancho, ejes, ruedas, rodamientos, tornilleria);
    return long;
});
const show_Long = (show) => {
    if (show != undefined) {
        console.log('/n ');
        console.log(`la marca es: ${show.marca}`);
        console.log(`El ancho es: ${show.ancho}`);
        console.log(`Los ejes son: ${show.ejes}`);
        console.log(`Las ruedas son: ${show.ruedas}`);
        console.log(`Los rodamientos son: ${show.rodamientos}`);
        console.log(`La tornilleria es: ${show.tornilleria}`);
        console.log(`El precio es: ${show.precio_total()}`);
    }
    else {
        console.log('primero crea el long porfavor');
    }
};
const actualizar_skate = (skate) => __awaiter(void 0, void 0, void 0, function* () {
    if (skate != undefined) {
        const leer = parseInt(yield (0, entradaTeclado_1.leerTeclado)('elegir que actualizar \n  1-- ancho 2-- ejes 3-- ruedas \n 4-- rodamientos 5-- tornilleria 6-- marca'));
        switch (leer) {
            case 1:
                skate.ancho = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija el ancho de la tabla,\n este depende del tamaño de su pie asi como: \n numero de pie -- ancho \n <37 -- <8 \n 37/42 -- 8/8.5 \n 42> -- 8.5> \n'));
                skate.precio_ancho();
                break;
            case 2:
                skate.ejes = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija los ejes:\n Ancho tabla -- Numero de eje \n < 7.5 -- 130 \n 7.5< x <8.5 -- 140 \n 8.5 > -- 150'));
                skate.precio_ejes();
                break;
            case 3:
                skate.ruedas = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija las ruedas: \n para patinar street -- <56 \n para patinar bowl 56>'));
                skate.precio_ruedas();
                break;
            case 4:
                skate.rodamientos = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo:\n rodamientos de metal \n rodamientos de cerámica');
                skate.precio_rodamientos();
                break;
            case 5:
                skate.tornilleria = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo:\n tornilleria blanca \n tornilleria negra');
                skate.precio_torilleria();
                break;
            case 6:
                skate.marca = yield (0, entradaTeclado_1.leerTeclado)('Elija nueva marca:');
                break;
        }
    }
    else {
        console.log('porfa crea la tabla');
    }
    skate === null || skate === void 0 ? void 0 : skate.precio_total();
});
const actualizar_long = (_new_long) => __awaiter(void 0, void 0, void 0, function* () {
    if (_new_long != undefined) {
        const leer = parseInt(yield (0, entradaTeclado_1.leerTeclado)('elegir que actualizar \n'));
        switch (leer) {
            case 1:
                _new_long.largo = parseInt(yield (0, entradaTeclado_1.leerTeclado)('dame el largo'));
                break;
            case 2:
                _new_long.ancho = parseInt(yield (0, entradaTeclado_1.leerTeclado)('nuevo ancho '));
                break;
            case 3:
                _new_long.ejes = parseInt(yield (0, entradaTeclado_1.leerTeclado)('nuevo eje'));
                break;
            case 4:
                _new_long.ruedas = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elija las ruedas: \n para patinar street -- <56 \n para patinar bowl 56>'));
                break;
            case 5:
                _new_long.rodamientos = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo: \n Rodamientos de metal \n Rodamientos de cerámica \n :');
                break;
            case 6:
                _new_long.tornilleria = yield (0, entradaTeclado_1.leerTeclado)('Elija el tipo:\n tornilleria blanca \n para tornilleria negra');
                break;
            case 7:
                _new_long.marca = yield (0, entradaTeclado_1.leerTeclado)('Elija nueva marca:');
                break;
        }
    }
    else {
        console.log('primero crea la tabla');
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let numero;
    let skate;
    let long;
    do {
        numero = yield (0, menusito_1.menu)();
        switch (numero) {
            case 1:
                skate = yield new_skate();
                break;
            case 2:
                long = yield new_long();
                break;
            case 3:
                show_skate(skate);
                break;
            case 4:
                show_Long(long);
                break;
            case 5:
                yield actualizar_skate(skate);
                break;
            case 6:
                yield actualizar_long(long);
                break;
        }
    } while (numero != 29);
});
//main()
//asignación manual la haré en forma de array
const new_array = () => {
    let array = new Array();
    array[1] = new skate_1.Skate('Element', 8.7, 140, 55, 'metal', 'negra');
    array[2] = new long_1.Long(110, 'family', 9.5, 150, 54, 'cerámica', 'blanca');
    array[3] = new skate_1.Skate('Santa cruz', 8.5, 130, 59, 'metal', 'blanca');
    array[4] = new long_1.Long(135, 'Creature', 9, 150, 56, 'metal', 'negra');
    delete array[1];
    return array;
};
console.log(new_array());
