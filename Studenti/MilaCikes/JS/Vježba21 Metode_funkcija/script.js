var obj = {
  num: 2,
};
// call - poziv
function add(a) {
  console.log(this.num);
  return this.num + a;
}

//console.log(this);
var b = add(3);
console.log(b);

var c = add.call(obj, 3);
console.log(c);

// apply - primjeni

function add2(a, b) {
  return this.num + a + b;
}

var d = add2.apply(obj, [3, 5]);
console.log(d);

// bind - poveži
function add3(a) {
  console.log(this.num);
  return this.num + a;
}

var e = add3.bind(obj, 6);
console.log(e());
