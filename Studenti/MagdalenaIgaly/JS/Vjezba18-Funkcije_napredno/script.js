// 1.
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

console.log('y = ' + y); // y je funkcija
console.log('z = ' + z); // z je undefined

// 2.
var xx = "John Doe";

const myF = (function(name) {
    var x = name;
    function f() {
      return x; 
     }
    return f;
 })(xx);

 console.log(myF(xx));