var text = 'Lorem ipsum dolor sit amet.';

var length = text.length;

console.log(length);

var wordSit = text.substr(19, 3); // Ili neka druga metoda je ok
console.log(wordSit);

text.replace('amet', 'elit'); // Ili regex, ako netko bas zna
console.log(text);
var newText = text + ', consectetur adipiscing elit';
console.log(newText);
var veliko =text.toUpperCase();
console.log(veliko);

text.trim();
var trim =console.log(trim);
var slovo = text.charAt(12);
console.log(slovo);