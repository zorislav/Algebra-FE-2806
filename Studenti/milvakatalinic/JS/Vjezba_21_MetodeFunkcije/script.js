var obj = {
  num: 2,
};
//call

function add(a) {
  console.log(this.num); //undefined
  return this.num + a;
}

//console.log (this);
var b = add(3);
console.log(b);

var c = add.call(obj, 3);
console.log(c);

//apply - omogucava niz umj pojedinac elem

function add2(a, b) {
  return this.num + a + b;
}

var d = add2.apply(obj, [3, 5]);

console.log(d);

// bind - povezi..funkc se ne izvrsava odmah, vraca se nova

function add3(a) {
  console.log(this.num);
  return this.num + a;
}
var e = add3.bind(obj, 6);
console.log(e());
//smisao ovih funkcija je da se iz globalnog konteksta stavi u kontekst objekta
