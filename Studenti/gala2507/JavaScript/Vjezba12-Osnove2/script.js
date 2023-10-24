var password = "1234561";

// 1

function isUnique(str){
  return _.uniq(str).length == str.length;

  
}

console.log("OPcija 1:" +isUnique(password));

// 1a

function isUnique1(str) {
  return new Set(str).size == str.length;
}

console.log("OPcija 1a:" +isUnique(password));

//1b

function isUnique2(str) {
  for (var i of str) {
    console.log(i);
  }
}

isUnique2(password);