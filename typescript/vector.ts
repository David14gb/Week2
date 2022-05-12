export class Vector {
    private elements = []

    constructor(n:number, k:number){
        let longitud:number
        for(let i = 0; i < n; i++){
        longitud = (Math.round(Math.random()*k))
        this.elements.push(longitud)
        }
    }

    public print():void{
        console.log(this.elements);
        
    }
    public add(v1:Vector):Vector{
        let suma:Vector = new Vector(0,0)
        for(let i = 0; i < this.elements.length; i++){
        suma.elements[i] = this.elements[i] + v1.elements[i]
        }
        return suma
    }
    public subs(v1:Vector):Vector{
        let resta:Vector = new Vector(0,0)
        for(let i = 0; i < this.elements.length; i++){
        resta.elements[i] = this.elements[i] - v1.elements[i]
        }
        return resta
    }
    public mult(v1:Vector):Vector{
        let multiplicar:Vector = new Vector(0,0)
        for(let i = 0; i < this.elements.length; i++){
        multiplicar.elements[i] = this.elements[i] * v1.elements[i]
        }
        return multiplicar
    }
    public multNumber(n:number):Vector{
        let multiN:Vector = new Vector(0,0)
        for(let i = 0; i < this.elements.length; i++){
        multiN.elements[i] = this.elements[i] * n
        }
        return multiN
    }


}