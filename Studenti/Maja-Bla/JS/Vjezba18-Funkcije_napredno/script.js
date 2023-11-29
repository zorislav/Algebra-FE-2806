var x = "John Doe"; 

function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y);
console.log(z);