import { Vinilo } from "./vinylo"
import { Tocadisco } from "../schemas/maquinas"
import { Tocadiscos } from "./tocadiscos"
export class Cliente {

    _ID:number
    _Nombre:string
    _Edad:number
    _carrito:Array<any>
    

    constructor(_ID:number, _Nombre:string, _Edad:number, _carrito:Array<any>)
    {
        this._ID=_ID
        this._Edad=_Edad
        this._Nombre=_Nombre
        this._carrito=_carrito
    }

     get ID(){
        return this._ID
    }
    get edad(){
        return this._Edad
    }
    get nombre(){
        return this._Nombre
    }
    get carrito (){
        return this._carrito
    }
    
    comprobarcarrito(){
        if (this._carrito.length==0){
            return false
        }else {
            return true
        }
    }
    
    agregarCarrito(object:Vinilo | Tocadiscos){
        this._carrito.push(object)
    }
    borrarCarrito(object:number){
        this._carrito.splice(object, 1)
    }
    vercarrito(){
        this._carrito.forEach(element => console.log(element))
    }
    eliminarcarrito(){
        this._carrito = []
    }
    precio_carrito(){
        let precio : number | any
        for (let b of this._carrito){
            let c = b._precio
            precio = precio +c
        }
        return precio
    }
    
}
