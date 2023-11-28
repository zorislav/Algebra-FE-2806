//1. Ispisati širinu i visinu trenutno otvorenog prozora

//Rezolucija ekrana - displeja
var sirina = window.screen.width;
console.log('Rezolucija sirina ekrana: ' + sirina);
console.log('Rezolucija visina ekrana: ' + window.screen.height);

//Dmenzije prozora
console.log('Širina prozora: ' + window.innerWidth);
console.log('Visina prozora: ' + window.innerHeight);
//ovo je zapravo veličina prozora, koji se minja ako ga smanjujemo povećavamo!!!


//2. saznajte ime domene stranice i redirektajte na neku drugu stranicu

console.log('Adresa: ' + window.location.hostname); 
//window.location.replace("http://www.google.com");
//ovo nam prebacuje našu stranicu u relodanju na google


//3. napišite naredbu koja otvara konfirmacijski prozor vezan za politiku cookija

var odgovor = window.confirm('Prihvaćate li cookije?');
//kad smo spremili u varijablu dajemo vrijednost nekom odogvoru!!!, PRIHVAĆAMO TU VRIJEDNOST U VARIJABLI(LOGIČKU VRIJEDNOST U OVOM SLUČAJU)
//OVO JE BITNO!!!!
console.log('Odgovor: ' + odgovor); 
window.alert('Podaci će biti obrisani!');
//alert daje bitne informacije korisnicima aplikacije, a dok ga ne kliknu ne mogu koristiti aplikacju


//4. napraviti conslole.log funkciju koja će se izvršiti 2 sekunede nakon što je pozvana


window.setTimeout(function(){
    console.log('Danas malo kasnim');
}, 5000);
//prvi parametar je fukcija koja će se izvršiti, a drugi parametar broj milisekundi(5 sec)
//zanmljivo i korisno, naučit!!!


