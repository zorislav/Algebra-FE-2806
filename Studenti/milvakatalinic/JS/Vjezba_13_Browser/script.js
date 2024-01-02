// Ispišite u konzoli visinu i širinu svog trenutno otvorenog browser prozora
//1. Dimenzije ekrana

var sirina = window.screen.width;
console.log("Sirina ekrana:" + sirina);
console.log("Visina ekrana:" + window.screen.height);

// 2. Dimenzije prozora

console.log("Sirina prozora:" + window.innerWidth);
console.log("Visina prozora:" + window.innerHeight);

//Saznajte ime domene stranice (hostname) i redirektajte na www.google.com

console.log("Adresa:" + window.location.hostname);
//window.location.replace("http://www.google.com");

//Napišite naredbu koja otvara konfirmacijski prozor u browseru
//vezan uz politiku cookija

var odgovor = window.confirm("prihvacate li cookije?");
console.log("Odgovor:" + odgovor);
//window.alert("Podaci ce biti obrisani"); //dijalog prozori se koriste
//za komunikaciju s korisnicima

//Napišite jednostavnu console.log
//funkciju koja se izvršava 5 sekunde nakon što je pozvana

function imeFunkcije() {
  console.log("Danas malo kasnim");
}
window.setTimeout(imeFunkcije, 5000); //setTimeout izvrsava neku funkciju
//sa nekim vremenskim odmakom. Ovdije koristimo anonimnu funkciju;
