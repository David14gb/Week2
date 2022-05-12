    export class Person{
    public name:string
    public age:number
    private address:string

    constructor(name:string, age:number, address:string){
        this.name = name
        this.age = age
        this.address = address
    }

    public printName():void{
        console.log(this.name);   
    }
    public yearOfBirth(currentYear:number):number{
        
        return currentYear - this.age   
    }
    setAddress(address:string):void{
         this.address = address

    }
    getAddress():string{
        return this.address

    }
}

console.log("hola");




