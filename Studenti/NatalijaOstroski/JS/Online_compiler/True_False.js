// logički izrazi ili logičke vrijednosti- "!!" boolean (true/false)

var x = "1";

console.log(typeof !!x); // "boolean",
console.log(!!x); // "true"

//

var x = "";

console.log(typeof !!x); // "boolean",
console.log(!!x); // "false"

//
// 1. ispitivanje dali je dodjeljena neka vrijednost
var x = "bilo koji sadrzaj";
var y = "";

var z = !!x ? "Da" : "Ne"; // testiramo sadrzaj variable "!!x", ako je truthy ispisujemo (tj dodjeljujemo "da" u varijablu "z") "Da" dok ako je falsey ispisujemo "Ne"

console.log(typeof !!x); // "boolean",
console.log(!!x); // "true"
console.log(z); // "da"

//
// 2. ispitivanje dali je dodjeljena neka vrijednost
var x = "";
var y = "";

var z = !!x ? "Da" : "Ne";

console.log(typeof !!x); // "boolean",
console.log(!!x); // "false"
console.log(z); // "ne"

// "!!" upotrebom ovog "negacija negacija" operatora (pored kojeg je postavljen, u ovom slucaju "x") testira se dali je neki izraz truthy ili falsey - moze se koristi unutar "if" naredbe

//     _____OBJAŠNJENJE NEGACIJA NEGACIJE_____

// _________Imamo niz znakova u varijabli   x="bla bla bla"
// "!" - prva negacija "truthy" prebacuje u "falsey" , logicku vrijednost "false"
// "!!" - druga negacija logicku vrijednost "false" prebaciti u logicku vrijednost "true".
// - Time od truthy izraza dobivamo logicku vrijednost "true"

//__________Nemamo niz znakova u varijabli  x=""
// "!" -  prva negacija "falsey" prebacuje u "truthy" , logicku vrijednost "true"
// "!!" - druga negacija logicku vrijednost "true" prebaciti u logicku vrijednost "false".

// VAŽNO!!
//  prazan "string" je false
//  prazan [niz] i {objekt} je true
//  numerička vrijednost je true , 0 je false
//  vrijednost null je false
