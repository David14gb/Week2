let {Person} = require("./person")

let pepe = new Person(180, 65, 1995);
pepe.hobbies = ["deporte", "Atleti", "gimnasio"];
console.log(pepe, pepe.imc(), pepe.edad(2022), pepe.printHobbies());
pepe.printAll();