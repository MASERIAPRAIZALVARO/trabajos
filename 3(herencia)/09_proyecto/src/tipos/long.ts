import { Skate } from "./skate";
export class Long extends Skate {
protected _largo:number 
protected _marca:string
protected _ancho:number
protected _ejes:number
protected _ruedas:number
protected _rodamientos:string
protected _tornilleria:string

constructor(
    _largo:number,
    _marca:string,
    _ancho:number,
    _ejes:number,
    _ruedas:number,
    _rodamientos:string,
    _tornilleria:string
    )
    {
        super (_marca,_ancho,_ejes,_ruedas,
            _rodamientos,_tornilleria)
        this._largo=_largo
        this._marca=_marca
        this._ancho=_ancho
        this._ejes=_ejes
        this._ruedas=_ruedas
        this._rodamientos=_rodamientos
        this._tornilleria=_tornilleria

        
    }
    get largo (){
        return this._largo
    }
    set largo (_largo:number){
        this._largo==_largo
    }
    
    precio_total():number{
        let precio:number
        precio = super.precio_total();
            if (this._largo>110){
                precio += 20
        }
            else if (this.largo<=110){
                precio +=10
            }
    return precio
    }
}


