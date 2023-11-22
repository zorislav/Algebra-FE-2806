/* Pratite kod u script.js

1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?

2., 3. i 4. Koju će vrijednost ispisati console.log? Zašto? */

var x = "Lorem ipsum",
  y = 2345,
  z = "2345",
  q = false;

// 1.

var trueFalse = !!"false" == !!"true";
console.log(trueFalse);

//2.

console.log(q || x || y || z); // ispisuje sadrzaj one varijable koja prva daje true vrijednost

//3.

var num = 6;
num--; //umanjujemo vrijedost varijable za 1
console.log(num);

//4.

var price = 26.5;
var taxRate = 0.082;

var totalPrice = price + (price * taxRate);
console.log(totalPrice);
console.log(totalPrice.toFixed(2)); //ako zelimo konvertirati string u broj, samo dodamo + prije totalPrice
