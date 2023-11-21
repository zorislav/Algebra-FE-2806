var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false;


//1.
var trueFalse = !!'false' == !!'true';
console.log(trueFalse);

//varijabla = logVar ? vrijednost1 : vrijednost2

//2.
console.log(q || x || y || z);
//ispisuje prvu varijablu koja daje true vrijednost - ovdi je to x


//3.
var num = 6;
num--;
console.log(num); // konzola ispisuje 5


//4. ovi je zanimljiv jer metoda toFixed daje string

var price = 26.5;
var taxRate = 0.082;
var totalPrice = price + (price * taxRate); // prioritet operacija radimosa zagradama
console.log(totalPrice);
console.log(totalPrice.toFixed(2)); // zaokružuje na dvije decimale
console.log(typeof(totalPrice.toFixed(2))); //metoda toFixed daje STRING!!!
console.log(typeof(+totalPrice.toFixed(2)));// konvertirali smo string nazad u broj sa + operatorom!!!



//-------------------------------bonus
var niz = ['a', 'b', 'c'];
for (var i = 0; i < niz.length; i++){
    console.log(niz[i]);
}

for (var i of niz) {
    console.log(i);
}


//obe petlje daju isto!!!!
//bitno!!!!
