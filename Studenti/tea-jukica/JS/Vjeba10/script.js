var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr) {
  var word = "";

  for (var i = 0; i < arr.length; i++) {
   
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

var longestWord = findLongestWord(words);
console.log(longestWord);

//console.log(words);