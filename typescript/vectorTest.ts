import { Vector } from "./vector"

let pruebaVector:Vector = new Vector(3,20);

pruebaVector.print();

let v1:Vector = new Vector(3,20);
let v2:Vector = new Vector(0,0)
v2 = pruebaVector.add(v1)
v2.print();

let v3:Vector= new Vector(0,0);
v3 = pruebaVector.subs(v1);
v3.print();

let v4:Vector = new Vector(0,0);
v4 = pruebaVector.mult(v1);
v4.print();

let v5:Vector = new Vector(0,0);
v5 = pruebaVector.multNumber(2);
v5.print();
