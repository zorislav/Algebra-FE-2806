var text = " Lorem ipsum dolor sit amet";

//1. Spremite duljunu stringa u varijablu.

var duljina_stringa = text.length;
console.log(duljina_stringa);

//2. Izdvojite rijec 'sit' u zasebnu varijablu.

var rijecSit = text.substr(19, 3);
console.log(rijecSit);

//3. Zamijenite rijec 'amet' sa rijeci 'elit'.

var noviText = text.replace('amet', 'elit');
console.log(noviText);

//4.  Konkatenirajte u novu varijablu zadani string sa 
//stringom 'consectetur adipiscing elit', sa zarezom izmedu.

var dodaniText = text + ' consectetur adipiscing elit '
console.log(dodaniText);

//5. Konvertirajte sve riječi u orginalnom stringu u velika slova.

var velikiText = text.toLocaleUpperCase();
console.groupCollapsed(velikiText);

//6. Maknite početnu prazninu u stringu.

var bezPraznineText = text.trim();
console.log(bezPraznineText);

// 7. Nađite slovo na poziciji 12.

var slovo = text.charAt(12);
console.log(slovo);






