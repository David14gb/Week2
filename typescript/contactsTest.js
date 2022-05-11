"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var contacts_1 = require("./contacts");
var agenda = new contacts_1.Contacts();
var david = new person_1.Person("David", 27, "La calle de mi casa");
agenda.people.push(david);
agenda.printCalendar();
