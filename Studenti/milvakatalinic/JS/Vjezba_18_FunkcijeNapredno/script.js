//1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();
// 1
// y je funkcija
// z je undifined
console.log(y);
console.log(z);

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu
//funkciju koja prima parametar "name". Kreirajte globanu varijablu koju
//ta funkcija koristi i zadajte joj vrijednost.

var x = "John Doe";
const myF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(myF());
