
/* Opcija 1
var i = 3;

while (i <= 20) {

  if (i % 9 !== 0) { // i % 9 !== 0 --> ispisi brojeve koju su dijeljivi sa 9 i ostatak je razlicit od 0
    console.log(i);
  }
  i = i + 1; //uisto kao i i++; 
} */


//Opcija 2
var i = 2;

while (i < 20) {

  i = i + 1; 

  if (i % 9 === 0) { 
    continue;
  }
  console.log(i);
}

var varOne = 0;

for (var i = 0; i < 4; i++){ // i -> 0,1,2,3, 
  for (var j = 0; j < 4; j++) { // j -> 0,1,2,3 -> kada je i 0, j se izvrsava 4 puta. tako 4 puta po 4.
    varOne++;
    console.log("i:" + i + "j:" + j+ "varOne: " + varOne);
  }
}

console.log("varOne: " + varOne );