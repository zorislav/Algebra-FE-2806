"use strict"
// 1.
var a = 78;
var b = 34;
// delete a;
// delete window.b;
const myObject = {property1:1, property2:2, property1:1};

// 2.
const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

var allUsers = [...users, user];
console.log(allUsers);

for (let i = 0; i < 10; i++) {
    setTimeout(function(){
        console.log(`The number is ${i}.`);
    }, 2000)
}

// console.log(i);