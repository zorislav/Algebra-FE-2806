var text = " Lorem ipsum dolor sit amet";

// 1. Spremite duljinu stringa u varijablu.
var duljina_stringa = text.length;
console.log(duljina_stringa);

// 2. Izdvojite riječ 'sit' u zasebnu varijablu.
var rijecSIt = text.substr(19, 3);
console.log(rijecSIt)

// 3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviTekst = text.replace("amet" , "elit");
console.log(noviTekst);

// 4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit',
//  sa zarezom izmedu.
var dodaniTekst = text + ", consectetur adipiscing elit";
console.log(dodaniTekst);

// 5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikaSlova = text.toUpperCase();
console.log(velikaSlova);

// 6. Maknite počenu prazninu u stringu
var bezPraznine = text.trim();
console.log(bezPraznine);

// 7. Nađite slovo na poziciji 13
var nadiSlovo = text.charAt(13);
console.log(nadiSlovo);