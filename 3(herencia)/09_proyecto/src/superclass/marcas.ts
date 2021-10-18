export class marcas {
protected _marca:string

    constructor(
        _marca:string
    ){
        this._marca=_marca
        
    }
get marca () {
    return this._marca
}
set marca (_marca:string){
    this._marca=_marca
}
get iva_marca () {
    let iva:number 
    if (this._marca=='Santa cruz') {
        iva=0.4
    }
    if (this._marca=='Element') {
        iva=0.2
    }
    if (this._marca=='Creature') {
        iva=0.3
    }
    if (this._marca=='family') {
        iva=0.1
    }
    else {
        iva=0.5
    }
    return iva
}
}