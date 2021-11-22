import { Tocadiscos } from "./tocadiscos";
export class Gramofono extends Tocadiscos{
    protected _ID:number
    protected _velocidades='manual'
    protected _corneta: boolean
    protected _stock: number
    protected _precio : number

    constructor(_ID:number,_corneta:boolean, _stock: number, _precio:number
        )
        {
            super(_ID,_stock,_precio)
            this._ID=_ID
            this._stock=_stock
            this._corneta=_corneta
            this._precio=_precio
        }
        get corneta (){
            return this._corneta
        }
        get velocidad (){
            return this._velocidades
        }
        set corneta(corneta:boolean){
            this._corneta=corneta
        }
        get stock (){
            return this._stock
        }

        mostrar(){
            return(`${super.mostrar()}Corneta: ${this._corneta}, velocidades:${this._velocidades}`)
        }

}
