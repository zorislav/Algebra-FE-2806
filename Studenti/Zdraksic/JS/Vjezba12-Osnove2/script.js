var password = "1234561";

//1. napisati funkciju koja provjerava da li su svi znakovi jedinstveni

//1a sa lodash bibliotekom
function isUnique(str) {
  return _.uniq(str).lenght == str.lenght;
}

console.log("Opcija 1: " + isUnique(password));

//bez biblioteke, samo js kod
function isUnique1a(str) {
  return new Set(str).size == str.lenght;
}

console.log("Opcija 1a: " + isUnique1a(password));

//1b bez biblioteke, samo js kod /2
function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i; // strChars += i
  }

  return true;
}

console.log("Opcija 1b: " + isUnique1b(password));

//2.napisati funkciju koja provjerava da li su svi znakovi brojke

//sa lodash bibliotekom
function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log("Opcija2:" + isNum(password));

//2a bez biblioteke, samo js kod
function isNum2a(str) {
  for (var i of str) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}

console.log("Opcija2a:" + isNum2a(password));
console.log(password.charCodeAt(0));
