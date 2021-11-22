import { Gramofono } from "./modelos/gramofono";
import { Typedisco } from "./modelos/tiposdetocadiscos";
import { Vinilo } from "./modelos/vinylo";
import { Tocadiscos } from "./modelos/tocadiscos";
import { Discos, iVinilo } from "./schemas/Sdiscos";
import { igramofono, iTipotocadiscos, Tocadisco } from "./schemas/maquinas";
import { db } from "./database/database";
import { AgregarCarrito, bajar, bajar1, borrarCarrito, cancelarPedido, Cliente_ident, elegir0, realizarPedido, salvar, show_pedidos_cliente, verCarrito } from "./functions/funciones"
import { leerTeclado } from "./vistas/leerTeclado";
//salvar()

let finish = async () => {
    await db.conectarBD()
    // Cliente_ident()
    let b = parseInt(await leerTeclado('dime tu ID de cliente'))
    let usuario = await Cliente_ident(b)
    await elegir0(usuario)
    
    
}



finish()