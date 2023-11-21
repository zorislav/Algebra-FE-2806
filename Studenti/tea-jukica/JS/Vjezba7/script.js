// opcija 1
// var i = 3;

// while (i <= 20) {

//   if (i % 9 !== 0) {
//     console.log(i);
//   }

  
//   i = i + 1;
//   //i++
// }

//opcija 2
var i = 2;

while (i < 20) {

  i = i + 1;

  if (i % 9 === 0) {
    continue;
  }

  console.log(i);
  
}
