// Arimetički operatori ___ "--" dekrement i "++" inkrement
// x-- ili --x , x++ ili ++x  ___ različito ponašanje, ovisno o kontekstu

// prvo operacija dodjeljivanja "=", onda inkrement "++".   = X++
var x = 1;
var y = x++; // ovdje "x" povecavamo za 1
console.log(x); // dobivamo "2", u ovoj liniji ispisujemo "x" koji je povecan za 1 (1+1=2)
console.log(y); // dobivamo "1"
// "x++" notacija -  prvo smo dodjelili vrijednost varijable "x" u "y" to je jedan "1", nakon toga smo napravili inkrement operacije na "x" i "x" prebacili u "2"
// "++" inkrement dolazi nakon opracije "=" dodjeljivanja

// prvo operacija inkrement "++", onda dodjeljivanja "=".   = ++X
var x = 1;
var y = ++x; // uvecavamo sadrzaj varijable "x" za 1 (dakle inkrementiramo), dobijemo 2 (x=2)
console.log(x); // dobivamo "2" kao u prethodnoj varijabli
console.log(y); // dobivamo "2"
// prvo inkrementiramo "++x" , x=2, onda vrijednost "2" dodajemo varijabli "y"
