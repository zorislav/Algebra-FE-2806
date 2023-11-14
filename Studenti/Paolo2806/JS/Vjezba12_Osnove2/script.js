var password = "0123456";

//1.

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log("Opcija 1: " + isUnique(password));

// 1a

function isUnique1a(str) {
  return new Set(str).size == str.length;
}

console.log("Opcija 1a: " + isUnique1a(password));

// 1b

function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i; // strChars += i;
  }

  return true;
}

console.log("Opcija 1b: " + isUnique1b(password));

//2

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log("Opcija 2: " + isNum(password));

// 2a
function isNum2a(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }

  return true;
}

console.log("Opcija 2a: " + isNum2a(password));

// 3

function reduceLen(str) {
  if (str.length > 9) {
    var tempStr = _.take(str, 10);
    return tempStr;
  }
  return str;
}
console.log("Opcija 3: " + reduceLen(password));

// 3a

function reduceLen3a(str) {
  if (str.length > 9) {
    var tempStr = str.substring(0, 10);
    return tempStr;
  }
  return str;
}
console.log("Opcija 3a: " + reduceLen3a(password));
