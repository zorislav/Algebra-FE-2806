// 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

//____ opcija 01._______
// ostatak cijelobrojnog djeljenja nije jednak "0" (!==)

var i = 3;
while (i <= 20) {
  if (i % 9 !== 0) {
    console.log(i); // ispisujemo ga ako je
  }

  i = i + 1; // ili mozemo koristiti inkrement "i++"
}

//____ opcija 02.__________
// ostatak cijelobrojnog djeljenja jednak "0" (==)

var i = 2; // zbog inkrementa krecemo od "2" kako bi prvi broj bio 3 (2+1=3)
while (i < 20) {
  // takodjer zbog "i++" mora biti manje od 20 jer 19+1=20

  i = i + 1; // ili mozemo koristiti inkrement "i++"

  if (i % 9 === 0) {
    continue; // ako je djeljiv sa "9", nastavljamo sa slijedecom iteracijom u petlji
  }
  console.log(i); //vracamo ga nakon petlje "if", - ako broj nije djeljiv sa "9"
}

// 2. Koja je vrijednost isprintana u konzoli?

var varOne = 0;
for (i = 0; i < 4; i++) {
  // brojac unutar petlje je na "0", idemo dok je "i" manji od "4", mjenjamo brojac da ga inkrementiramo "i++"
  for (j = 0; j < 4; j++) {
    // drugi brojac, sve isto  ko u prvom
    varOne++; // varOne inkrementiramo za 1 (++)
    console.log(" i: " + i, "j:" + j + " varOne: " + varOne); // ispis kojim pratimo korak po korak!
  }
}
console.log("varOne:" + varOne); // zbrajanje stringa "varOne"+ varOne broja, JS broj pretvara u string i pribrojiti prvom stringu

/*
pojasnjenje:
vanjska petlja      i-> 0, 1, 2, 3.   -to su 4 radnje    
unutrasnja petlja   j-> 0, 1, 2, 3.   -takodje 4 radnji    
                    varOne++ se 4x inkrementira  krece od 1, 2, 3, 4 kada je "i=0"
                    kada je "i = 1" unutarnji dio se opet izvršava 4 puta znaci imamo 5, 6, 7, 8
                    kada je "i = 2" imamo 9, 10, 11, 12
                    kada je "i = 3" imamo 13, 14, 15, 16
*/
