//1.

var firstName = "Ivan";
var lastName = "Horvat";
var fullName = firstName + " " + lastName;
console.log(fullName);


//2.
// var x = z === 2 ? y : 5; - sve ovo ispod moze biti zamjenjeno sa ovom linijom

var x;
var z = 2;
var y = 10;

if (z === 2) {
  x = y;
} else {
  x = 5;
}

console.log ("x je: " + x);


//3.

for (var i = 1; i <=20; i++) {
    if(i % 2 === 0) {
    console.log("Broj: " + i + " je paran"); 
    } else {
        console.log("Broj: " + i + " je neparan");     
    }
    
}


