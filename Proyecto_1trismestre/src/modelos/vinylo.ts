

export class Vinilo{
    protected _id: number
    protected _nombre: string
    protected _tamaño: string
    protected _stock: number
    protected _precio:number

    constructor(_id:number, _nombre:string,_tamaño:string, _stock:number, _precio:number)
    {
        
        this._id=_id
        this._nombre=_nombre
        this._tamaño=_tamaño
        this._stock=_stock
        this._precio=_precio
    }
    get ID (){
        return this._id
    }
    get tamaño(){
        return this._tamaño
    }
    get stock(){
        return this._stock
    }
    get nombre(){
        return this._nombre
    }
    get precio(){
        return this._precio
    }

    mostrar(){
        console.log(`ID: ${this.ID}, nombre: ${this._nombre}, tamaño: ${this._tamaño}`)
    }





   /* precio(){
        let precio:number
        if(this._tamaño=='single'){
            precio +=5
        }
        if(this._tamaño=='EP'){
            precio +=12.5
        }
        if(this._tamaño=='LP'){
            precio +=20
        }
        
    }*/
}