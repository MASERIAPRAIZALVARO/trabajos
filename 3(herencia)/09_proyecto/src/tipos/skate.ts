import {marcas} from '../superclass/marcas';

export class Skate extends marcas  {
protected _ancho: number
protected _ejes: number
protected _ruedas: number
protected _rodamientos: string
protected _tornilleria: string
constructor(
    _marca:string,
    _ancho:number,
    _ejes:number,
    _ruedas:number,
    _rodamientos:string,
    _tornilleria:string,
)
{
    super(_marca)
    this._ancho=_ancho
    this._ejes=_ejes
    this._ruedas=_ruedas
    this._rodamientos=_rodamientos
    this._tornilleria=_tornilleria
}
set marca (_marca:string){
this._marca=_marca
}
get marca(){
    return this._marca
}
get ancho () {
    return this._ancho
}
set ancho (_ancho:number) {
    this._ancho=_ancho
}
get ejes () {
    return this._ejes
}
set ejes (_ejes:number) {
    this._ejes=_ejes
}
get ruedas (){
    return this._ruedas
}
set ruedas (_ruedas:number) {
    this._ejes=_ruedas
}
get rodamientos () {
    return this._rodamientos
}
set rodamientos (_rodamientos:string) {
    this._rodamientos=_rodamientos
}
get tornilleria () {
    return this._tornilleria
}
set tornilleria (_tornilleria:string) {
    this._tornilleria=_tornilleria
}
precio_ancho():number {
    let precio1= 0  

    if (this.ancho <= 8.25){
        precio1 = precio1 + 40
    }
    else if (this.ancho > 8.25){
        precio1 = precio1 + 50   
    }
    return precio1
}
precio_ejes():number{
    let precio2=0
    // 130 para tablas <7.5, 140 entre 7.5-8.5, 150 >8.5
    if (this._ejes == 130) {
        precio2 = precio2 + 43
    }
    else if (this._ejes == 140) {
        precio2 = precio2 + 56
    }
    else if (this._ejes == 150) {
        precio2 = precio2 + 77
    }
    return precio2
}
precio_ruedas():number{
    let precio3=0
    if (this._ruedas <= 56 ) {
        precio3= precio3 + 35
    }
    else if (this._ruedas > 56) {
        precio3= precio3 + 40
    }
    return precio3
}
precio_torilleria():number{
    let precio4  = 0
    if (this._tornilleria =='negro') {
        precio4= precio4 + 5
    }
    else if (this._tornilleria =='blanco') {
        precio4= precio4 + 7
    }
return precio4
}
precio_rodamientos():number {
    let precio5=0
    if (this.rodamientos =='metal') {
        precio5= precio5 + 5
    }
    else if (this.rodamientos =='cerámica') {
        precio5= precio5 + 5
    }
    return precio5
}

precio_total():number {
    let precio = 0
    precio = this.precio_rodamientos() + this.precio_ancho() 
    + this.precio_ejes() + this.precio_torilleria() 
    + this.precio_ruedas()
    precio = precio + (precio * this.iva_marca)
return precio
}
}

