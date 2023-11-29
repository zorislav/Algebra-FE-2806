// 1.

var firstName = "Ivan";
var lastName = "Horvat";

var fullName = firstName + " " + lastName;

// 2.
// var x = z === 2 ? y : 5;



var z = 2;
var y = 10;

var x;

if (z === 2) {
  x = y;
} else {
  x = 5;
}

console.log("x je: " + x);

// 3. 


for (var i = 1; i <= 20; i++) {

	if (i % 2) {
		console.log("Broj " + i + " je neparan.");
	} else {
		console.log("Broj " + i + " je paran.");
	}
  
}