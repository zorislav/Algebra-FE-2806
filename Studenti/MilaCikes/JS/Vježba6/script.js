var x = "Lorem ipsum",
y = 2345,
z = "2345",
q = false;

// 1. 
var trueFalse = "false" == "true";
console.log(trueFalse);

// varijabla = log_var ? vrijednost1 : vrijednost 2

// 2.
console.log(q || x || y || z );

// 3.
var num = 6;
num--;
console.log(num);

// 4.

var price = 26.5;
var taxRate = 0.082;

var totalPrice = price + (price * taxRate);
console.log(totalPrice);
console.log(typeof (totalPrice.toFixed(2)));