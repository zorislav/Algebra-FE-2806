// 1. Postavite “use strict” direktivu na početak programa u scripts.js.
// Ispravite sve greške koje se javljaju.

'use strict'

let a = 78;
var b = 34;
//delete a;
//delete window.b;
const myObject = {property1:1, property2:2, property1:1};
//ovo je dobro, npr objekt bez deklaracije je javio grešku, a inače ne bi!!!


//---------------------------------------------------------------------------------
// 2. Dodajte polje(niz) "user" u "users" pomoću spread operatora. 
//Spremite rezultat u novu varijablu i ispisite rezultat.


const users = [
  { name: 'Fabio', surname: 'Biondi' },
  { name: 'Mario', surname: 'Rossi' },
];

const user = { name: 'Lorenzo', surname: 'Verdi' };

const allUsers = [...users, user];
//razbili smo userse na komade i dodali user!!!
console.log(allUsers);


//------------------------------------------------------------------------------
//3. Koju vrijednost vraćaju console.log izjave? Probajte zamijeniti let sa var.

for(let i = 0; i < 10; i++){
    setTimeout(function(){
        console.log(`The number is ${i}`);
    },2000)
}

//console.log(i); 
//BITNO JER LET I CONST NE POSTOJE VAM BLOKA FOR PETLJE, I AKO NJIH STAVIMO DAJE GREŠKU!!!
//AKO STAVIMO VAR I  - PRINTAT ĆE GA NORMALNO!!!

//ALI S OBZIROM DA JE PETLJA DAVNO IZVRŠENA, A TIMEOUT KASNI TIMEOUT ĆE NAM ISPISATI
//10 PUTA I=10 JER JE I GLOBALNA VARIJABLA !!!
// DA JE OVDJE LET, NORMALNO BI RADILO OD 0 - 9 JER NIJE GLOBALNA VARIJABLA

//PROUČIT OVO JOŠ MALO 



