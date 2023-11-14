// najobicnija definicija funkcije
function mojaFunkcija(p) {
  return p + 1;
}
console.log(mojaFunkcija(2)); // 3

// anonimna funkcija bez naziva/imena
var mf2 = function (p) {
  // moderni JS umjesto "var" koristi "const" i postaje konstanta
  return p + 2;
};
console.log(mf2(2)); // 4

// treci nacin kako napisati funkciju, a to je arrow "=>"
var mf3 = (p) => {
  return p + 3;
};
console.log(mf3(3)); // 6

// moze se napisati i bez zagrade postoje samo jedna naredba koja se automatski vraca
var mf3 = (p) => p + 3;
console.log(mf3(3)); // 6
// kada je jedan parametar "p" takodjer ne treba zagrada
const mf3 = (p) => p + 3;
