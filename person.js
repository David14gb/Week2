class Person{                           //Reto 1
    constructor(altura, peso, yearOfBirth){
        this.altura = altura;
        this.peso = peso;
        this.pelo = "castaño";
        this.yearOfBirth = yearOfBirth; //Reto 3
        this.hobbies = [];

    }
    imc(){                              //Reto 2
        return this.peso/(this.altura*this.altura)*10000
    }
    edad(year){                         //Reto 3
        return year - this.yearOfBirth
    }
    printAll(){
        console.log("Reto4");
        console.log("Altura-" + this.altura + " Peso-" + this.peso + " Pelo-" + this.pelo + " yearOfBirth-" + this.yearOfBirth);
        
    }
    printHobbies(){
        return this.hobbies;
    }
    
}
//Main
console.log("Reto 1");
let pepa = new Person(180,65,2001);     //Reto 1
console.log(pepa);

console.log("Reto 2");
let pepe = new Person(180,65,1995)
console.log(pepe.imc());                //Reto 2

console.log("Reto 3");
console.log(pepe.edad(2022));           //Reto 3

pepe.printAll();                        //Reto 4

pepe.hobbies = ["deporte", "Atleti", "gimnasio"]
console.log("Reto 5");
console.log(pepe.printHobbies());       //Reto 5

module.exports ={Person}

