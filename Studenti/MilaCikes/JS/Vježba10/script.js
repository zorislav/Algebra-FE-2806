var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr) {
  var word = ""

  for (var i=0; i < arr.lenght; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  
  }
  return word;
}

var longestWord = findLongestWord(words);

console.log(findLongestWord(words));

//findLongestWord(words);

//var mojaFunkcija = findLongestWord;

//mojaFunkcija();

//console.log(words);