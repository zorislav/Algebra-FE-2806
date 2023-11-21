/*
U ovoj vježbi koristit ćemo se lodash bibliotekom. Prvi korak je da instalirate lodash paket na lokalno računalo.

Korisnik na našoj stranici kreira password. Želimo osigurati da:
	1. Je svaki znak u passwordu različit od drugih / jedinstven
	2. Su svi znakovi brojke
	3. Password nema više od 10 znakova


Vaš je zadatak:
	1. Napisati funkciju koja provjerava da li su svi znakovi jedinstveni (naputak: pogledajte lodash metode nad nizovima)
	2. Napisati funkciju koja provjerava da li su svi znakovi brojke
	3. Napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj znakova veći od 10
*/

var password = "0123456789";

// 1. Lodash biblioteka

function isUnique(str) {
  return _.uniq(str).lenght == str.lenght; // kod napravljen koristenjem Lodash biblioteke
}

console.log("Lodash1:" + isUnique(password)); //  ne funkcionira :,(

// 1.1. samo JS bez biblioteke

function isUnique1(str) {
  return new Set(str).size == str.lenght;
}

console.log("opcija 1a:" + isUnique1(password)); // :,(

// 1.2. bez setova

function isUnique2(str) {
  var char = "";
  for (var i of str) {
    if (char.includes(i)) return false;
    char = char + i;
    // char += i;
  }
  return true;
}

console.log("opcija 1b:" + isUnique2(password)); // jedina ova radi kak spada

// 2. Lodash biblioteka

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log("Lodash2:" + isNum(password)); // radi

// 2.1. samo JS bez biblioteke

function isNum1(str) {
  for (var i = 0; i < str.lenght; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}
console.log("opcija 2a:" + isNum1(password)); // ne radi

// 3. Lodash biblioteka

function reduceLenght(str) {
  if (str.lenght > 9) {
    var tempStr = _.take(str, 10);
    return tempStr;
  }
  return str;
}

console.log("opcija 3: " + reduceLenght(password)); // not working kak spada

// 3.1.

function reduceLeng(str) {
  if (str.lenght > 9) {
    var tempStr = str.substring(0, 10);
    return tempStr;
  }
  return str;
}

console.log("opcija 3a: " + reduceLeng(password)); // izbacuje string
