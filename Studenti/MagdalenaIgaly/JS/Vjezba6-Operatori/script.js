var x = 'Lorem ipsum',
    y = 2345,
    z = '2345',
    q = false;

// 1.
var true_false = !!'false' == !!'true';
console.log(true_false);

// 2.
console.log(q || x || y || z);

// 3.
var num = 6;
num--;
console.log(num);

// 4.
var price = 26.5;
var tax_rate = 0.082;
var total_price = price + price * tax_rate;
console.log(total_price.toFixed(2)); 
console.log(typeof total_price.toFixed(2)); // string
console.log(typeof +total_price.toFixed(2)); // number!!!