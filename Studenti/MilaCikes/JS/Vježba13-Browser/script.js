// 1
// Dimenzije ekrana
var sirina = window.screen.width;
console.log("Sirina ekrana: " + sirina);
console.log("Visina ekrana: " + window.screen.height);

// Dimenzije prozora
console.log("Sirina prozora: " + window.innerWidth);
console.log("Visina prozora: " + window.innerHeight);

// 2
console.log("Adresa: " + window.location.hostname);
//window.location.replace("http://www.google.com");
window.confirm("prihvaćate li cookije?");
var odgovor = window.confirm("prihvaćate li cookije?");
console.log("Odgovor: " + odgovor);


//window.alert("Podaci će biti obrisani!");

//3
function imeFunkcije() {
  console.log("Danas malo kasnim");
}

//window.setTimeout(imeFunkcije, 5000);

window.setTimeout(function(){
  console.log("Danas malo kasnim");
}, 5000);