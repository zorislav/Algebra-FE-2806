var x = "Lorem ipsum", //truthy
  y = 2345,
  z = "2345",
  q = false; // logicka vrijednost

/*      TERNARNI ili uvjetni  OPERATOR
    varijabla = log_Var ? vrijednost1 : vrijednost2
                log_Var= true/false
    _____ pretvaranje vrijednost u logicki izraz ---->  !!truthy=true   !!falsey=false

*/

// 1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?

// 2., 3. i 4. Koju će vrijednost ispisati console.log? Zašto?

//1.
var trueFalse = !!"false" == !!"true"; // "==" ispitivanje jednakost, "!!" pretvaranje truthy ili falsey vrijednosti u logicki izraz truth ili false
console.log(trueFalse); // "true",  zato jer su oba dva operanda niz znakova tj, "string"

//2. ILI varijabla
console.log(q || x || y || z); // "Lorem ipsum"
//ispisuje prvu varijablu koja daje true vrijednost

//3. Dekrement
var num = 6;
num--; // umanjujemo vrijednost varijable "num" za 1
console.log(num); //"5"

//4.
var price = 26.5;
var taxRate = 0.082;
var totalPrice = price + price * taxRate; // prioritet operacija radimo sa zagradama
console.log(totalPrice); // "28.6730000000002"
console.log(typeof totalPrice); // "number"
console.log(totalPrice.toFixed(2)); // "28.67" _zaokruzuje na dvije decimale
console.log(typeof totalPrice.toFixed(2)); // "string"
console.log(typeof +totalPrice.toFixed(2)); // "number"  _korišten unarni operator "+"
