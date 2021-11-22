import { Tocadiscos } from "./tocadiscos"
export class Typedisco extends Tocadiscos{

    protected _ID : number
    protected _modelo:string
    protected _velocidades:number
    protected _stock: number
    protected _precio:number
    constructor(_ID: number,_modelo:string,_velocidades:number, _stock:number,_precio:number)
    {
        super(_ID,_stock,_precio)
        this._ID=_ID
        this._stock=_stock
        this._modelo=_modelo
        this._velocidades=_velocidades
        this._precio=_precio
    }

    get modelo (){
        return this._modelo
    }
    get velocidad (){
        return this._velocidades
    }
    set modelo (modelo:string){
        this._modelo = modelo
    }
    set velocidades (velocidad:number){
        this._velocidades=velocidad
    }
    get stock(){
        return this._stock
    }

    mostrar(){
        return(`${super.mostrar()}modelo: ${this._modelo}, velocidades:${this._velocidades}`)
    }
}

