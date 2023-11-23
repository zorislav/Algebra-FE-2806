//1
var sirina = window.screen.width;
console.log('Sirina ekrana: ' + sirina);
console.log('Visina ekrana: ' + window.screen.height);

console.log('Širina prozora: ' + window.innerWidth);
console.log('Visina prozora: ' + window.innerHeight);

//2
console.log('Adresa ' + window.location.hostname);
// window.location.replace('http://www.google.com');
var odgovor = window.confirm('prihvacate li cookije?');
console.log('Odgovor: ' + odgovor);

// window.alert('Podaci će biti obrisani!');

//3
function imeFunkcije(){
  console.log('Danas malo kasnim');
}
window.setTimeout(imeFunkcije, 2000);