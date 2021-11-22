import { db } from "../database/database"
import { Cliente, } from "../modelos/clientes"
import mongoose, { ClientSession } from 'mongoose';
import { Tocadiscos } from "../modelos/tocadiscos";
import { iCliente, Clientes } from "../schemas/clientes";
import { leerTeclado } from '../vistas/leerTeclado';
import { Gramofono } from "../modelos/gramofono";
import { Typedisco } from "../modelos/tiposdetocadiscos";
import { Vinilo } from "../modelos/vinylo";
import { Tocadisco, igramofono, iTipotocadiscos } from "../schemas/maquinas";
import { Discos, iVinilo } from "../schemas/Sdiscos";
import { Pedido } from "../modelos/pedido";
import { iPedido, Pedidos1 } from "../schemas/pedido";
import { Console } from "console";
import { parse } from "path/posix";
import { menu } from "../vistas/menu";



export let salvar = async () => {

    let discos: Array<Vinilo> = new Array<Vinilo>();

    discos[0] = new Vinilo(1, 'Led Zeppelin -- Led zeppelin 1', 'LP', 10, 25);
    discos[1] = new Vinilo(2, 'Led Zeppelin -- Led zeppelin 2', 'LP', 13, 30);
    discos[2] = new Vinilo(3, 'Black Sabbath -- Volumen 4', 'EP', 20, 27);
    discos[3] = new Vinilo(4, 'Black Sabbath -- Black Sabbath', 'LP', 12, 55);
    discos[4] = new Vinilo(5, 'Uriah Heep -- Magicians Birthday', 'LP', 44, 34);
    discos[5] = new Vinilo(6, 'Speedometer -- Again and Again', 'Single', 24, 17);

    let tocadiscos: Array<Tocadiscos> = new Array<Tocadiscos>();

    tocadiscos[0] = new Gramofono(1, true, 5, 1000)
    tocadiscos[1] = new Gramofono(2, false, 7, 500)
    tocadiscos[2] = new Typedisco(3, 'MX-300', 2, 10, 300)
    tocadiscos[3] = new Typedisco(4, 'MX-200', 1, 11, 250)
    tocadiscos[4] = new Typedisco(5, 'MX-600', 3, 9, 400)

    let Objeto: any
    let dSchemaVinilo: iVinilo =
    {
        _ID: null,
        _nombre: null,
        _tamaño: null,
        _stock: null,
        _precio: null
    }

    let Objeto2: any
    let dShcmeaGramofono: igramofono = {

        _tipoObjeto: null,
        _ID: null,
        _velocidades: null,
        _corneta: null,
        _stock: null,
        _precio: null
    }

    let dSchemaTocadiscos: iTipotocadiscos = {

        _tipoObjeto: null,
        _ID: null,
        _velocidades: null,
        _modelo: null,
        _stock: null,
        _precio: null
    }

    await db.conectarBD()

    for (let a of discos) {

        dSchemaVinilo._ID = a.ID
        dSchemaVinilo._nombre = a.nombre
        dSchemaVinilo._tamaño = a.tamaño
        dSchemaVinilo._stock = a.stock
        dSchemaVinilo._precio = a.precio


        Objeto = new Discos(dSchemaVinilo)
        console.log(Objeto)
        await Objeto.save()
    }

    for (let b of tocadiscos) {

        dShcmeaGramofono._ID = dSchemaTocadiscos._ID = b.ID
        dShcmeaGramofono._stock = dSchemaTocadiscos._stock = b.stock
        dShcmeaGramofono._precio = dSchemaTocadiscos._precio = b.precio

        if (b instanceof Gramofono) {
            dShcmeaGramofono._corneta = b.corneta
            dShcmeaGramofono._velocidades = b.velocidad
            dShcmeaGramofono._tipoObjeto = 'gram'
            console.log(Objeto2)
            Objeto2 = new Tocadisco(dShcmeaGramofono)
        }
        else if (b instanceof Typedisco) {
            dSchemaTocadiscos._modelo = b.modelo
            dSchemaTocadiscos._velocidades = b.velocidad
            dSchemaTocadiscos._tipoObjeto = 'tipo'
            console.log(Objeto2)
            Objeto2 = new Tocadisco(dSchemaTocadiscos)
        }
        await Objeto2.save()

    }

}


export let Cliente_ident = async (ID: number) => {
    await db.conectarBD()
    let cliente: Cliente | any
    let Ocliente: any
    let ClienteSchema: iCliente = {
        _ID: null,
        _Edad: null,
        _Nombre: null,
        _carrito: null
    }
    let query: any = await Clientes.find({ _ID: ID })
    if (query.length == 0) {
        // No existe objeto con ese Id
        const Nombre = await leerTeclado('Escribe tu nombre')
        const Edad = parseInt(await leerTeclado('Dame tu edad'))
        ClienteSchema._ID = ID
        ClienteSchema._Edad = Edad
        ClienteSchema._Nombre = Nombre
        ClienteSchema._carrito = []
        cliente = new Cliente(ID, Nombre, Edad, [])
        Ocliente = new Clientes(ClienteSchema)
        await Ocliente.save()
        console.log('Cliente creado¡¡')
    } else {
        // Si existe objeto con ese Id
        for (let a of query) {
            cliente = new Cliente(a._ID, a._Nombre, a._Edad, ["vacio"])
            console.log(`tu id es: ${cliente.ID}`)
            console.log(`tu nombre es: ${cliente.nombre}`)
            console.log(`tu edad es: ${cliente.edad}`)
            console.log(`tu carrito es: ${cliente.carrito}`)
        }

    } return cliente

}


export let bajar = async () => {
    await db.conectarBD()
    let query2: any = await Discos.find()
    for (let a of query2) {
        let disco = new Vinilo(a._ID, a._nombre, a._tamaño, a._stock, a._precio)
        disco.mostrar()
    }

}
export let bajar1 = async () => {
    db.conectarBD()
    let gramofono: Gramofono
    let tocadisco: Typedisco
    let query: any = await Tocadisco.find()
    for (let b of query) {
        if (b._tipoObjeto == 'gram') {
            gramofono = new Gramofono(b._ID, b._corneta, b._stock, b._precio)
            console.log(gramofono.mostrar())
        }
        if (b._tipoObjeto == 'tipo') {
            tocadisco = new Typedisco(b._ID, b._modelo, b._velocidades, b._stock, b._precio)
            console.log(tocadisco.mostrar())
        }
    }

}

export let actualizar = async (usuario: Cliente) => {
    db.conectarBD()
    for (let a of usuario.carrito) {
        if (a instanceof Vinilo) {
            let b: number = a.stock - 1
            await Discos.findOneAndUpdate({ _ID: a.ID }, { _stock: b })

        }
        else if (a instanceof Gramofono) {
            let b: number = a.stock - 1
            await Tocadisco.findOneAndUpdate({ _ID: a.ID }, { _stock: b })

        }
        else if (a instanceof Typedisco) {
            let b: number = a.stock - 1
            await Tocadisco.findOneAndUpdate({ _ID: a.ID }, { _stock: b })

        }
    }
}


export let AgregarCarrito = async (usuario: Cliente) => {
    db.conectarBD()
    let aVinilo: Vinilo
    let tocadiscos: Tocadiscos

    let ID: number = parseInt(await leerTeclado('dime el ID del objeto deseado'))
    let pregunt = await leerTeclado('Dime si es disco o maquina')
    switch (pregunt) {
        case 'disco':
            let query: any = await Discos.findOne({ _ID: ID })
            if (query._stock == 0) {
                console.log('Disculpa no nos quedan más')
            } else {
                aVinilo = new Vinilo(query._ID, query._nombre, query._tamaño, query._stock, query._precio)
                usuario.agregarCarrito(aVinilo)
                return query._precio
            }
            break
        case 'maquina':
            let query1: any = await Tocadisco.findOne({ _ID: ID })
            if (query1._tipoObjeto == 'gram') {
                if (query1._stock == 0) {
                    console.log('Disculpa no nos quedan más')
                } else {
                    tocadiscos = new Gramofono(query1._ID, query1._corneta, query1._stock, query1._precio)
                    usuario.agregarCarrito(tocadiscos)
                    return query1._precio
                }
            }
            else if (query1._tipoObjeto == 'tipo') {
                if (query1._stock == 0) {
                    console.log('Disculpa no nos quedan más')
                } else {
                    tocadiscos = new Typedisco(query1._ID, query1._modelo, query1._stock, query1._velocidades, query1._precio)
                    usuario.agregarCarrito(tocadiscos)
                    return query1._precio
                }
            }

            break
    }

}
export let dinero_carrito = async (precio: number, monedero: number) => {
    monedero += precio
    return monedero
}
export let menos_dinero_carrito = async (precio: number, monedero: number) => {
    monedero -= precio
    return monedero
}
export let verCarrito = async (usuario: Cliente) => {
    let b = usuario.comprobarcarrito()
    if (b == false) {
        console.log('porfavor añade algo al carrito')
    }
    else {
        usuario.vercarrito()
    }

}
export let borrarCarrito = async (usuario: Cliente) => {
    let b: number = usuario.carrito.length - 1
    let a: number
    let c: number
    if (b == 0) {
        console.log('porfavor añade algo al carrito')
    }
    else {
        usuario.vercarrito()
        a = parseInt(await leerTeclado(`Dime cual quieres borrar desde el 1 al ${b}`))
        usuario.borrarCarrito(a)

    }
}
export let realizarPedido = async (usuario: Cliente, monedero: number) => {

    let ipedido: iPedido = {
        _ID: null,
        _objetos: null,
        _fecha: null,
        _id_cliente: null,
        _precio_total: null
    }
    let b = usuario.carrito.length
    console.log(`${b}`)
    if (b != 1) {
        await db.conectarBD()
        ipedido._fecha = new Date()
        ipedido._ID = Math.trunc(Math.random() * (9999 - 1111) + 1111 - Math.random() + Math.random());
        ipedido._id_cliente = usuario.ID
        ipedido._objetos = usuario.carrito
        ipedido._precio_total = monedero
        let objet = new Pedidos1(ipedido)
        await objet.save()
        await actualizar(usuario)
        await usuario.eliminarcarrito()

    }
    else {
        console.log('Primero llena el carrito')
    }
    await db.desconectarBD()
}

export let show_pedidos_cliente = async (usuario: Cliente) => {
    await db.conectarBD()
    let hola = await Pedidos1.find({
        id_cliente: usuario.ID
    })

    console.log(`${hola}`)

}
export let cancelarPedido = async (usuario: Cliente) => {
    await db.conectarBD()
    await show_pedidos_cliente(usuario)
    let n: number = parseInt(await (leerTeclado('id')))
    Pedidos1.findOneAndDelete({
        _ID: n,
    }, (err: any, doc: any) => {
        if (err) {

        } else {
            if (!doc) {

            } else {

            }
        }
    });
}

export let elegir0 = async (usuario: Cliente) => {
    let n: number | any
    let monedero = 0

    do {
        let n = await menu()
        switch (n) {
            case 1:
                console.log('Los discos')
                await bajar()
                await new Promise(f => setTimeout(f, 1000));
                console.log('Ahora las maquinas')
                await bajar1()
                break
            case 2:
                let c = await AgregarCarrito(usuario)

                monedero = await dinero_carrito(c, monedero)
                break
            case 3:
                await verCarrito(usuario)
                break
            case 4:
                await borrarCarrito(usuario)
                let d: number = parseInt(await leerTeclado('Dame el precio del objeto borrado'))
                monedero = await menos_dinero_carrito(d, monedero)
                break
            case 5:
                await realizarPedido(usuario, monedero)
                await actualizar(usuario)
                console.log(`Su pedido ha salido por ${monedero}`)
                break
            case 6:
                await cancelarPedido(usuario)
                break
            case 7:
                await show_pedidos_cliente(usuario)
                break
            case 8:
                console.log(monedero)
                break
        }
    } while (n != 0)
}