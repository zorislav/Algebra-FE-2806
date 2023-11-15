//1.Formatirajte JS kod po naučenim pravilima:
//- maknite višak razmaka u izjavama
//- dodajte razmak gdje smatrate da je nužan za jednostavnije čitanje koda
//- dodajte točku-zarez na kraj izjavavar firstName,
//  lastName, price, discount, fullPrice;

var firstName, lastName, price, discount, fullPrice;

firstName = "John";
lastName = "Doe";

price = 19.9;
discount = 0.1;
var x = 2; //dodana deklaracija za x

if (x == 1) {
  //dodana kontrola toka (npr.if)
  x = 2;
}
var a = true; //dodana deklaracija za a

if (a) {
  var z = 44;
  return 0;
}

fullPrice = (price * 100) / discount;

//Izraz "dodana kontrola toka" se koristi za opisivanje koda
//koji upravlja tijekom izvođenja programa. Kontrola toka
//omogućuje programu da odluči koji dio koda će se izvršiti
//na temelju uvjeta ili drugih čimbenika. U vašem kodu, "if"
//izjava predstavlja kontrolu toka jer provjerava je li izraz
// x === 1 istinit (true), i ako jest, izvršava se naredba unutar
//bloka koda koji slijedi.

// Dakle, kada kažemo "dodana kontrola toka," to znači da je
// unutar "if" izjave dodana kontrola koja određuje kako će se
//program ponašati ovisno o vrijednosti x. U ovom slučaju,
//ako je x jednak 1, tada će se izvršiti naredba x = 2, inače
//će se ta naredba preskočiti i program će nastaviti s
// izvođenjem sljedećih naredbi.
