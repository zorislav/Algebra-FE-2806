// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
// 2. Dodajte svoje ime na kraj niza.
// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

var names = ["John", "Jane", "Bob",, "Marley"];

// console.log(names);

//1.

for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for (var element of names) {
//   console.log(element);
// }

//2.

names.push("Moje ime");

console.log(names);

//3.

for (var element of names) {
  console.log(element);
  if (element === "Jane") break;
}

//4.

for (var i = 0; i < names.length; i++) {

  if( !names[i] ) names.splice(i,1);
}

console.log(names);

// var noviNiz = names.filter(function(name){
//   return name !== undefined;
// });

// console.log(noviNiz);