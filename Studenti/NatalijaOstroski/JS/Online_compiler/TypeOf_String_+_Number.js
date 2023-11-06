//rad u online JS compileru

console.log(typeof +[1]); // Unary operator "+" mjenja ovaj string u broj
console.log(typeof +'1'); // isto mjenja u broj

var a = 10; // cjelobrojni tip podataka - integar
var b = 3.14; // decimalni tip podataka - float

console.log('5' - 3); // daje 2, JS daje implicitnu konverziju gdje konvertira prvi string u broj i radi operaciju oduzimanja
var x = '5' - 3; //radimo varijablu
console.log(typeof x); // operator "typeof" , rezultat konverzije "number"
console.log(x)

var x = '5' + 3; // rezultat je string "53", zato jer operator "+" koji ima različito znacenje, konvertira 3 u string i spaja string sa stringom "53"
console.log(typeof x);
console.log(x);

var x = '5' - '4'; // rezultat je "1", stringovi su konvertirani u brojeve, operacija oduzimanja
console.log(typeof x);
console.log(x);

var x = '5' + + '5'; // "55" string, "+5" konvertiran u broj ako se može
console.log(typeof x);
console.log(x);

var x = '5' + + 'b'; // "5NaN" string, "+b" nemoze konvertiran u broj i dobije se NaN- not an number
console.log(x);
console.log(typeof x);

var x = 'foo' + + 'bar'; // string "fooNaN" , kao i u prijašnjem primjeru "bar" ne može konvertirati u broj, zato je dodjelio NaN
console.log(x);
console.log(typeof x); 

var x = 'foo' + + '123'; // string "foo123", "123"je iz stringa pretvoren u broj
console.log(x);
console.log(typeof x);

var x = '5' + - '2'; // '5' + (-2) dobivamo string "5-2", konkatenacija
console.log(x);
console.log(typeof x); 

var x = 3;  
console.log(typeof ('5' +x -x)); // number
console.log('5' +x -x); // "50" , znaci 3-3=0 , konvertira se u string i dobijemo "0" string, spojimo "5" sa "0" dobijemo "50"

var x = 3;
console.log(typeof x); //number
console.log('5' -x +x); // "5", -3+3=0 , oduzimamo nulu od 5 i ostaje nam samo "5" koji je konvertiran u broj
//JS radi konverzije tipova podataka


// zasto operator "typeof" dobro dode
var x = '345';
console.log(x); // 345
console.log(typeof x); // string
console.log(+x); //345
console.log(typeof +x); // number
// "+" kao Unary Plus Operator radi konverziju tipa iz stringa u broj




//ovo je bitno radi API podataka koji dolaze iz vani, oni iskljucivo odgovaraju samo sa stringovima, a nama npr treba broj
//onda moramo sve pretvoriti takoder i broj