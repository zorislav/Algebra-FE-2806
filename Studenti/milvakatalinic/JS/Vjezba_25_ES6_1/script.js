"use strict";
//1. Postavite “use strict” direktivu na početak programa u
//scripts.js. Ispravite sve greške koje se javljaju.

// 1.
var a = 78;
var b = 34;
//delete a;
//delete window.b;
const myObject = { property1: 1, property2: 2, property1: 1 };

//2. Dodajte polje "user" u "users" pomoću spread operatora.
// Spremite rezultat u novu varijablu i ispisite rezultat.

// 2.
const users = [
  { name: "Fabio", surname: "Biondi" },
  { name: "Mario", surname: "Rossi" },
];

const user = { name: "Lorenzo", surname: "Verdi" };

var allUsers = [...users, user]; //spread operator, cesto se koristi kada imamamo
//neki objekt u memoriji i trebamo ga zamijeniti.

console.log(allUsers);

//3.Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.
// 3.
for (var i = 0; i < 10; i++) {
  //ovdije var ima globalni opseg
  //let se drugacije ponasa
  console.log(i);
  setTimeout(function () {
    console.log(`The number is ${i}`);
  }, 1000);
}

console.log(i);
