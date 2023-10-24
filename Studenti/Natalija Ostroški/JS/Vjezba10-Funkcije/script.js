var words = ["quickest", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];

// console.log(words);

// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

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

// 2. Vratite tu riječ iz funkcije i spremite u varijablu.

// 3. Ispišite varijablu u konzoli.
