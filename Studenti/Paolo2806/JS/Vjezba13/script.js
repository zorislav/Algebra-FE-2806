// 1
// dimenzije ekrana
var sirina = window.screen.width;
console.log("sirina ekrana:" + sirina);
console.log("visina ekrana:" + window.screen.height);

// dimenzije prozora
console.log("sirina prozora:" + window.innerWidth);
console.log("visina prozora:" + window.innerHeight);

// 2
console.log("adresa: " + window.location.hostname);
/* window.location.replace("http://www.google.com");*/
var odgovor = window.confirm("Mogu li dobiti casu vode?");
console.log("odgovor: " + odgovor);
// window.alert("Podaci će biti obrisani!");

// 3
function imeFunkcije() {
  console.log("danas malo kasnim");
}
/* window.setTimeout(imeFunkcije, 2000); //2000 u milisekundama
 */

window.setTimeout(function () {
  console.log("danas malo kasnim");
}, 2000);
