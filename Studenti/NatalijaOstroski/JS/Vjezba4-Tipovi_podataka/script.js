// mogu se koristiti i jednostruki navodnici, vazno je da se isti navodnici koriste u cijelom kodu

var x = "Lorem ipsum", // string
    y = 2345,  // broj
    z = "2345" // string
	q = false, // logicka 
	w;

// 1. y i z imaju istu vrijednost - možemo ih testirati na vrijednost i sadržaj
      // "==" test na sadržaj "z == y" true, jer je sadržaj isti 
      // "===" test na vrijednost i sadržaj "z === y" false, jer vrijednost nije ista
      // "=" znak za pridruživanje, nema veze sa testiranjem

// 2. Lorem ipsum31
x += "3" + 1; // ispod je ispisani izraz
x = x + "3" + 1;

//console.log(x);  -  naredba za provjeru!


// 3. baNaNa

var baaa = "b" + "a" + +"a" + "a";  // "+a" ne moze konvertirati iz stringa u broj, stoga dobivamo "NaN"
//  var baaa = "b" + "a" + +"3" + "a";  - kao primjer "+a" zamjenimo sa "+3", moze se "+3" konvertirati iz stringa u broj i dobijemo rezultat "ba3a"

//console.log(baa);


// 4. undefined

console.log(typeof w);  //tip
console.log(w); // vrijednost 
// razlika u ispisu izmedu ispisane vrijednosti (sivi font) i tipa (crni font)