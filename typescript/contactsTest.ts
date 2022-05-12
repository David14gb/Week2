import { Person } from "./person"
import { Contacts } from "./contacts"


let agenda = new Contacts();
let david = new Person("David", 27, "La calle de mi casa");
agenda.people.push(david);
agenda.printCalendar();
