let {Contacts} = require("./contacts")
let {Person} = require("./reto")


let jorge = new Person(180,70, 1990);
let maria = new Person(160,60, 1994);


let conjunto = new Contacts();
conjunto.contacto.push(jorge, maria);

conjunto.printPersons();

console.log("Reto 8");