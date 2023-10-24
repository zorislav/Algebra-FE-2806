// 1. dio
var firstName = 'Magdalena';
var lastName = 'Igaly';
var fullName = firstName + ' ' + lastName;

console.log(fullName);

// 2. dio - var x = z === 2 ? y : 5;
var x;
var y = 10;
var z = 2;
if (z === 2) {
    x = y;
}
else {
    x = 5;
}
console.log('x = ' + x);

// 3. dio
for (var i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`Broj ${i} je paran`);
    }
    else {
        console.log(`Broj ${i} je neparan`);
    }
}