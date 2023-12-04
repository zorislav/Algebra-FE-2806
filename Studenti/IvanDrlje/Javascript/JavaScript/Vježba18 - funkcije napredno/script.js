
// 1. zadatak -  Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

var x = "John Doe"; 

function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}

var y = vratiNesto("Jane Doe");//ovo je trik, jer poziv nije ipravan, tribaju još jedne zagrade
var z = vratiNesto()();

console.log(y); //konzola daje vrijednost - funkcija f, jer se ona returnira a ona nije pozvana
console.log(z); //konzola daje undefined, jer nismo stavili parametar u prve zagrade!


//2. zadatak -  Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". 
//Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var k = 'Ivan Horvat';

const myF = (function (name) {
   var x = name;
   function f() { return k; }
   return f;
})(k);//OVDE SMO STAVILI VANJSKI PARAMETAR I POZVALI PRVi put vanjsku FUKCIJU!!!

console.log(myF());//OVDE MORAMO POZVATI I DRUGU FUNKCIJU (zapravo izvršavamo
//unutarnju kojoj smo returnom dobili vrijednost) I ONDA SVE RADI!!!



