//1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, 
//ali s razmakom ("") između imena i prezimena. 

var firstName = "Ivan";
var lastName = "Horvat";
var fullName = firstName + " " + lastName;
console.log(fullName);

//2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
//var x = z === 2? y : 5;

var x;
var z = 2;
var y = 10;
if (z === 2) {//ako je z = dva, onda je ono sto pridruzujemo var x zapravo y
               
	x = y;    //zato x=y
} else {      //inace ako z nije 2(to je stanje iza dvotocke)
              //onda var x prodruzujemo 5
	x = 5;
}
console.log('x je:'+x);

//3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. 
//Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, 
//i console.log-ati rezultat (npr. "Broj 2 je paran").  

for (var i = 1; i <= 20; i++) {
	if (i % 2 ) {
		console.log('Broj ' + i + ' je neparan.');
	} else {
		console.log('Broj ' + i + ' je paran.');
	}
}
//ili dr varijanta

//for (var i = 1; i <= 20; i++) {
//	if (i % 2 === 0) {
//		console.log('Broj ' + i + ' je paran.');
//	} else {
//		console.log('Broj ' + i + ' je neparan.');
//	}
//}