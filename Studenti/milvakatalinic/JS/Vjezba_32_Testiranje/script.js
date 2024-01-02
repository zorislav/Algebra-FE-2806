function findMax(numbers) {
  var i;
  var max = -Infinity;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const niz = [1, 2, 4, 3];

var maks = findMax(niz);
console.log(maks);

module.exports = findMax;
