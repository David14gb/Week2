import { Library } from "./library"
import { Book } from "./book"

let libro1 = new Book ("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")
let libro2 = new Book ("Introducción a Typescript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions")

let libreria1 = new Library([libro1, libro2], "hola dirección", "los manejamos");

console.log(libreria1.toString());

console.log(libreria1.getNumberOfBooks());

console.log((libreria1.findByAuthor("Joseph Smith")));
