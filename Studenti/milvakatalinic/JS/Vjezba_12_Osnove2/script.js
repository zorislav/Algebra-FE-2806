//U ovoj vježbi koristit ćemo se lodash bibliotekom.
//Prvi korak je da instalirate lodash paket na lokalno računalo.

//Korisnik na našoj stranici kreira password. Želimo osigurati da:
//1. Je svaki znak u passwordu različit od drugih / jedinstven
//2. Su svi znakovi brojke
//3. Password nema više od 10 znakova

//Vaš je zadatak:

//1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni
//(naputak: pogledajte lodash metode nad nizovima)

var password = "123456";

function isUnique(str) {
  //koristimo str kao skracenicu za string jer se odnosi na niz znakova
  return _.uniq(str).length == str.length; //ova funkcija (uniq)kreira novi niz iz kojeg su izbaceni duplikati
  //ako niz nema niti jedan duplikat onda ce ove duzine biti iste (true)
  //ako ima, onda ce biti razlicite
}
console.log("Opcija 1:" + isUnique(password));

//1a - bez ukljucivanja lodash biblioteke
function isUnique1a(str) {
  return new Set(str).size == str.length;
}
console.log("Opcija 1a:" + isUnique1a(password));

//1b - bez funkcije Set

function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i; //strChars +=i;
  }

  return true;
}
console.log("Opcija 1b:" + isUnique1b(password));

//2. Napisati funkciju koja provjerava da li su svi znakovi brojke

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}
console.log("Opcija 2:" + isNum(password));

//2a - bez koristenja lodash funkcija
function isNum2a(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}
console.log("Opcija 2a:" + isNum2a(password));

//console.log (password.charCodeAt(0)); //rezultat je 49; to znaci da je unicode od 1 (u stringu 123456)
//ako bi stringu dodali 0, onda bi unicode bio 48
//*pogledaj ascii tablicu (brojevi su od 48-57)

//3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova,
//ako je broj znakova veći od 10

function reduceLen(str) {
  if (str.length > 9) {
    var tempStr = _.take(str, 10);
    return tempStr;
  }
  return str;
}
console.log("Opcija 3:" + reduceLen(password)); //da bi se vidio rezultat potrebno prosirit
// pocetni password

//3a

function reduceLen3a(str) {
  if (str.length > 9) {
    var tempStr = str.substring(0, 10);
    return tempStr;
  }
  return str;
}
console.log("Opcija 3a:" + reduceLen(password));
