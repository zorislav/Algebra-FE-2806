// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = "Natalija";
var lastName = "Ostroski";
var fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije! "var x = z === 2 ? y : 5;"

var z = 2;
var y = 10;

var x;

if (z === 2) {
  // ako je "z" jednak "2",
  x = y; // "x" postaje "y"
} else {
  // ako "z" nije jednak "2",
  x = 5; // "x" je "5"
}

console.log("x je:" + x);

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20.
// Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    // ostatak broja "i" djeljenoga sa "2" jednak je "0"
    console.log("Broj: " + i + " je paran."); // u tom slucaju ispisujemo
  } else {
    console.log("Broj: " + i + " je neparan."); // ukoliko ostatak nije jednak "0"
  }
}

// mozemo zapisati i na ovaj nacin
for (var i = 1; i <= 20; i++) {
  if (i % 2) {
    console.log("Broj: " + i + " je neparan.");
  } else {
    console.log("Broj: " + i + " je paran.");
  }
}
