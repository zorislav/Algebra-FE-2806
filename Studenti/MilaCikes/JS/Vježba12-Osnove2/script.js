var password = "123456";

// 1
function isUnique(str) {
 return _ .uniq(str).lenght == str.length;

}
console.log(isUnique(password));

// 1a

function isUnique1a(str){
  return new Set(str).size == str.length;
}

  console.log("Opcija 1a: " + isUnique1a(password));

// 1b

function isUnique1b(str) {
  var strChars = "";
  for ( var i of str) {
    if (strChars.includes(i)) return false;
    strChars = strChars + i // str

  }
}

console.log("OPcija 1 b: " + isUnique1b(password));

// 2

 function isNum() {
  if (_.toNumber(str)) return true;
  return false;
 }

 console.log("Opcija 2: " + isNum(password));

 // 2a
 function isNum2a(str){
  for ( var i of str) {
    if (str.charCodeAt)(i)
  }
 }

 console.log(password.charCodeAt(0))

