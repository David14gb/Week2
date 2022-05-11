let {Contacts} = require("./contacts")
let {Person} = require("./person")


let jorge = new Person(180,70, 1990);
let maria = new Person(160,60, 1994);


let conjunto = new Contacts();
conjunto.contacto.push(jorge, maria);

conjunto.printPersons();

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