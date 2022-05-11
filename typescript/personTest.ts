import { Person } from "./person"

let pepe = new Person ("Pepe", 27, "Calle la pantomima")

pepe.printName();
console.log(pepe.yearOfBirth(2022));
pepe.setAddress("Otra Calle");
console.log(pepe.getAddress());


