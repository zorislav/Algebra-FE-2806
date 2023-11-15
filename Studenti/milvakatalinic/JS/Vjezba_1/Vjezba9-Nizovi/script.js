// 1. Pomoću petlje napravite iteraciju kroz niz i 
//ispisite u konzolu sve elemente niza.

var names = ["John", "Jane", "Bob", ,"Mike"];

//console.log(names);
for (var i = 0; i < names.length; i++){
    console.log(names [i]);
}

//primjer petlje for of

//for (var element of names){
//    console.log(element);
//}
//dobije se isti rezultat

//2. Dodajte svoje ime na kraj niza.

names.push("Moje ime");

//console.log(names);

//3. Koristeći petlju, napravite iteraciju kroz ovaj niz
// te nakon išto ispišete "Jane" izađite iz petlje.

for (var element of names){
    console.log(element);
    if (element === "Jane"){
        break;
    }
}
    
//4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

for (var i = 0; i < names.length; i++){
    if(!names[i]){
        names.splice(i,1);
    }
    console.log(names);
}
//ili

var noviNiz = names.filter(function(name){
    return name !==undefined;
});
console.log (noviNiz);
//filter se koristi u slucaju da zelimo izdvojiti nesto iz niza, a 
//map koristimo kada zelimo transformirati pojedini element niza