
// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function findLongestWord(arr) {
	var word = "";
	for (let i = 0; i < arr.length-1; i++) {
	    if (word.length < arr[i].length) {
	      word = arr[i];
	    }
	}
	return word;
}

var longestWord = findLongestWord(words);

console.log(longestWord);

//Ova funkcija prolazi kroz sve riječi u nizu i uspoređuje 
//njihove duljine. Najduža riječ se prati u varijabli longestWord.
//Nakon što se pretraži cijeli niz, funkcija će vratiti najdužu 
//riječ. U primjeru iznad, rezultat će biti "quickest" jer je to
//najduža riječ u zadatom nizu.

//2. Vratite tu riječ iz funkcije i spremite u varijablu.

function findLongestWord(arr) {
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
  var longest = findLongestWord(words);
  
  console.log('Najduža riječ je: ' + longest);

  //U ovom primjeru, funkcija findLongestWord vraća najdužu riječ,
  //a ta riječ se sprema u varijablu longest. Nakon što se funkcija izvrši,
  //možete pristupiti najdužoj riječi korištenjem varijable longest.

  //3. Ispišite varijablu u konzoli.

var words = ['quickest', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
var longest = findLongestWord(words);

console.log('Najduža riječ je: ' + longest); // Ispis najduže riječi
