"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var pepe = new person_1.Person("Pepe", 27, "Calle la pantomima");
pepe.printName();
console.log(pepe.yearOfBirth(2022));
pepe.setAddress("Otra Calle");
console.log(pepe.getAddress());
