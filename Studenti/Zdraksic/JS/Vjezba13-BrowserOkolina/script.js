//1.
//dimenzije ekrana
var sirina = window.screen.width;
console.log("sirina ekrana: " + sirina);
console.log("visina ekrana: " + window.screen.height);

//dimenzije prozora
console.log("sirina prozora: " + window.innerWidth);
console.log("visina prozora: " + window.innerHeight);

//2.
console.log("adresa: " + window.location.hostname);
//window.location.replace("https://www.google.com");
var odgovor = window.confirm("prihvacate li cookije");
console.log("odgovor: " + odgovor);
//window.alert("podaci ce biti obrisani");

//3.
function imeFunkcije() {
  console.log("danas malo kasnim");
}
//window.setTimeout(imeFunkcije, 5000);
window.setTimeout(function () {
  console.log("danas malo kasnim");
}, 5000);
