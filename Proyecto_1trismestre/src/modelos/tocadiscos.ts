
//import { Discos } from './discos'
export class Tocadiscos {
    protected _ID : number
    protected _stock : number
    protected _precio : number
    
    //private discos:Array<Discos>

    constructor(_ID: number,  _stock:number, _precio: number
        ){
            this._ID=_ID
            this._stock=_stock
            this._precio=_precio
            
        }
    get ID(){
        return this._ID
    }
    get precio(){
        return this._precio
    }
    get stock(){
        return this._stock
    }
    set ID(ID:number){
        this._ID=ID
    }
    set stock(stock:number){
        this._stock=stock
    }
    mostrar(){
        return`ID: ${this._ID}, stock: ${this._stock}, ${this._precio} `
    }

     /*precio(){
         let precio: number
         if (this._tipo =='MX300'){
            precio+=250
         }
         else if (this._tipo =='MX500'){
            precio+=350
        }
        else if (this._tipo =='gramofono'){
            precio+=500
        }
    return precio
     }*/
}
