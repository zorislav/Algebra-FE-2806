var ime = "Perica"; // deklalirali smo "string" koji je u osnovi niz (znakova), koji je ispod "haube" objekt
/* "Perica" je uređeni skup podataka, 
jer znamo da je "P" na prvom mjesto koji se oznacava indexom "0",
"e" je na drugom mjestu i oznacava se indeksom "1"....
          p  0
          e  1
          r  2
          i  3
          c  4
          a  5
*/
console.log(ime.toUpperCase()); // "PERICA"
/*  ____toUpperCase____ je metoda koja je definirana na objektu __ime.__
 znaci "ime" je objekt koji je definiran "Perica"
 */

// ovisno o dodjeljenoj vrijednosti (vrsti podataka koji se stavljaju u varijablu) "Perica" / "10" tek onda JS zna dali je nesto u konacnici objekt i kojeg je tipa
// ako u sadrzaju varijable nije string (var x = 10;) onda nemoze primjeniti neke metode koje se primjenjuju samo na "string", jer to je drugaciji objekt

var x = ["Ivica", "Marica", "Perica"];

console.log(typeof x); // "object"

//
var x = ["Ivica", , "Perica"];
console.log(x); // "["Ivica", <1 empty item>, "Perica"]"
console.log(x[0]); // "Ivica"
console.log(x[1]); // "undefined"

//
var names = ["Natalija", "Kreso", "Mike"];

/*function imeFunkcije(argumenti){
  tijelo funkcije
}
imeFunkcije():  ____ izvrsavamo funkciju
*/

names.forEach(function (element) {
  // ananomna funkcija bez imena
  console.log(element); // ispisuje elemente u nizu jedan ispod drugog
});

console.log(names);

var noviNiz = names.map(function transform(element) {
  // funcija transform vraca prvi element "natalija" i tako dalje, kada zelimo trasformirati novi niz
  return "Ime:" + element;
});
console.log(noviNiz); // novi niz jednak starom  ["Natalija", "Kreso", "Mike"]
//skup podataka koji je prikazan kao niz, "map" funkciju koristimo da iz samog podatka napravimo nesto slicnu HTML kodu u Rejactu

//"matrix" multidimenzionalni niz, x i y kordinate, moze biti i vise kordinata (n)

var matrix = [
  [1, 2, 3],
  ["Natalija", "Kreso", "Mike"],
]; //[[(0x)0y,1,2],[(1x)0y,1,2]]
console.log(matrix[0][1]); //2  (0x,1y)
console.log(matrix[1][2]); //Mike (1x,2y)
matrix[0][4] = 5; // (0x,4y)
console.log(matrix); // [[1,2,3,<1 empty item>,5],["Natalija", "Kreso", "Mike"]] __ u 0x3y nemamo nista zato je <1 empty item>

//
