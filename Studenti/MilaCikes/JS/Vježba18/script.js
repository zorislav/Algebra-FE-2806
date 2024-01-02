// 1.
// y je funkcija
// z je undefined
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
console.log(y);
console.log(z);

// 2

var x = "John Doe";

const MyF = (function (name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
})(x);

console.log(MyF());
