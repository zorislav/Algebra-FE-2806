var text = ' Lorem ipsum dolor sit amet'

var duljina_stringa = text.length;

console.log(duljina_stringa);

let rijecSit = text.substr(19, 3);

console.log(rijecSit);

var noviTekst = text.replace('amet', 'elit');
console.log(noviTekst);

var dodaniTekst = text + ', consectetur adipiscing elit';
console.log(dodaniTekst);

var velikiTekst = text.toUpperCase();
console.log(velikiTekst);

var bezPraznine = text.trim();
console.log(bezPraznine);

var slovo = text.charAt(12);
console.log(slovo);