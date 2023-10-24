var text = ' Lorem ipsum dolor sit amet';

// 1. Spremite duljinu stringa u varijablu
let duljina_stringa = text.length;
console.log(duljina_stringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu
let rijec_sit = text.substring(19, 22);
console.log(rijec_sit);

// 3. Zamijenite riječ 'amet' sa riječi 'elit'
var novi_tekst = text.replace('amet', 'elit');
console.log(novi_tekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodani_text = text + ', consectetur adipiscing elit';
console.log(dodani_text);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var veliki_text = text.toUpperCase();
console.log(veliki_text);

// 6. Maknite počenu prazninu u stringu
var bez_praznina_text = text.trim();
console.log(bez_praznina_text);

// 7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);