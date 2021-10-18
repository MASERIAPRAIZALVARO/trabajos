import {leerTeclado} from '../util/entradaTeclado'

export const menu = async () =>  {
    let numero : number
    console.log('Pofavor elija una de las siguientes opciones para continuar \n 1-- Nuevo skate \n 2-- Nuevo long \n 3-- Mostrar skate \n 4-- Mostrar long ')
    console.log(' 5-- Actualizar skate \n 6-- Actualizar long \n 29 --exit')
    numero = parseInt(await leerTeclado(''))
    return numero
}
