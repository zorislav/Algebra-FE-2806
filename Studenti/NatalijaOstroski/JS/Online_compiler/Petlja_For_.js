// niz od 3 elementa
var niz = ["a", "b", "c"];

for (var i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}
// u svakom koraku petlje cemo ispisati po jedan element niz __ niz od 0 je a __ niz od 1 je b __ niz od 2 je c __

// alternativna notacija za niz
// for (var element of niz){ console.log(element)} ___ koristi se za iterabilni element (element koji se moze prolaziti u iteraciji)

for (var i of niz) {
  console.log(i);
}

//obje petlje daju isto!!!!
