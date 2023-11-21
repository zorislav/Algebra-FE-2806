var password = "0123456789";

//1

function isUnique(str) {
  return _.uniq(str).length == str.length;
}

console.log(isUnique(password));

//1a

function isUnique1a(str) {
  return new Set(str).size == str.size;
}

console.log(isUnique(password));

//1b

function isUnique1b(str) {
  var strChars = "";

  for (var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i; //strChars += i;
  }
  return true;
}

console.log(isUnique1b(password));

//2

function isNum(str) {
  if (_.toNumber(str)) return true;
  return false;
}

console.log(isNum(password));

//2a

function isNum2a(str) {
  for (var i = 0; str.length; i++) {
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) return false;
  }
  return true;
}

console.log(isNum2a(password));

//3

function reduceLen(str) {
  if (str.length > 9) {
    var tempStr = _.take(str, 10);
    return tempStr;
  }
  return str;
}

console.log(reduceLen(password));

//3a

function reduceLen3a(str) {
  if (str.length > 9) {
    var tempStr = str.substring(0, 10);
    return tempStr;
  }
  return str;
}
