let {Person} = require("./reto")


class Contacts {
    constructor(){
            this.contacto = [];
    }
    printPersons(){
       console.log(this.contacto);
    }
}

let jorge = new Person(180,70, 1990);
let maria = new Person(160,60, 1994);


let conjunto = new Contacts();
conjunto.contacto.push(jorge, maria);

console.log("Reto 7");
conjunto.printPersons();

console.log("Reto 8");

module.exports ={Contacts}