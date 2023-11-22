/* Koristeći metode rada nad stringovima iz zadanog stringa:
  1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12 */

//1. 27

var text = " Lorem ipsum dolor sit amet";

var duljina_stringa = text.length;
console.log(duljina_stringa);

//2.
var rijecSit = text.substr(19, 3);
console.log(rijecSit);

//3.
var noviText = text.replace("amet", "elit");
console.log(noviText);

//4.

var dodaniText = text + ", consectetur adipiscing elit";
console.log(dodaniText);

//5. 

var velikiText = text.toUpperCase();
console.log(velikiText);

//6.

var bezPraznineText = text.trim();
console.log(bezPraznineText);

//7.

var slovo = text.charAt(12);
console.log(slovo);