// 1. Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora
console.log("Sirina ekrana = " + window.screen.width);
console.log("Visina ekrana = " + window.screen.height);

// Dimenzije prozora
console.log("Sirina prozora = " + window.innerWidth);
console.log("Visina prozora = " + window.innerHeight);

// 2. Saznajte ime domene stranice (hostname) i redirektajte na www.google.com
console.log("Domena stranice = " + window.location.hostname);
// window.location.replace("http://www.google.com");

// 3. Napišite naredbu koja otvara konfirmacijski prozor u browseru vezan uz politiku cookija
var odgovor = window.confirm("Prihvacate li cookije?");
console.log("Odgovor = " + odgovor);

// window.alert("Podaci ce biti obrisani.");

// 4. Napišite jednostavnu console.log funkciju koja se izvršava 2 sekunde nakon što je pozvana
// function imeFunkcije() {
//   console.log("Danas malo kasnim");
// }
// window.setTimeout(imeFunkcije, 5000);

// Anonimna funkcija
window.setTimeout(function () {
  console.log("Danas malo kasnim");
}, 5000);
