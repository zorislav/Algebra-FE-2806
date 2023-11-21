var names = ["John", "Jane", "Bob", , "Mike"];
console.log(names); /*0:"John"
                      1:"Jane"
                      2:"Bob"
                      4:"Mike"
                      length:5
                      */

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// alternativna notacija za "for" petlju u obliku "for of"
for (var elemente of names) {
  console.log(elemente);
}

// 2. Dodajte svoje ime na kraj niza.
names.push("Natalija");
console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (var element of names) {
  console.log(element);
  if (element === "Jane") break; // imamo jednu naredbu "break" pa ga nemoramo stavljati u {}
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

for (var i = 0; i < names.length; i++) {
  if (!names[i]) {
    names.splice(i, 1); // takodjer se taj names.splice nemora pisati u {}, jer je jedna naredba
  }
}
console.log(names);

//
var noviNiz = names.filter(function (name) {
  return name !== undefined;
});

console.log(noviNiz);
