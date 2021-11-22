export class Pedido {

    protected _ID: number
    protected _objetos: Array<any>
    protected _fecha: Date
    protected _precio_total:number
 
    constructor(_ID:number, _objetos:Array<any>, _fecha:Date,_precio_total:number){
        this._ID=_ID
        this._objetos=_objetos
        this._fecha=_fecha
        this._precio_total=_precio_total
    }

    get ID (){
        return this._ID
    }
    
    get objetos(){
        return this._objetos.forEach(Element=>console.log(Element))
    }
    get fecha(){
        return this._fecha
    }
    get precio_total(){
        return this._precio_total
    }
    subirpedido(objeto:any){
        this._objetos.push(objeto)
    }
    
}