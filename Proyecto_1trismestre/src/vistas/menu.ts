import { leerTeclado } from "./leerTeclado"
export const menu = async( ) => {
    let n: number
    console.log(" 1- Ver catálogo")
    console.log(" 2- Agregar carrito")
    console.log(" 3- Ver carrito")
    console.log(" 4- Borrar objeto del carrito")
    console.log(" 5- Realizar pedido")
    console.log(" 6- Cancelar Pedido")
    console.log(" 7- Ver pedidos")
    console.log(" 8- Ver precio")
    console.log(" 0 - exit")
    n = parseInt(await leerTeclado(''))
    return n 
}