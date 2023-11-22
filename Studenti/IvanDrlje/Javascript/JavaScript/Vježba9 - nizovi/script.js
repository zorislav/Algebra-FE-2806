// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.


//prva opcija
var names = ['John', 'Jane', 'Bob',, 'Mike'];

for( var i = 0; i < names.length; i++){
    console.log(names[i]);
}


//druga opcija

for(var element of names){
    console.log(element); //ovo je onaj names na poziciji i(varijable) zapravo
};


// 2. Dodajte svoje ime na kraj niza.

names.push('Ivan');
console.log(names);

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for(var element of names){
    console.log(element);
    if(element === 'Jane') break; //kada unutar if petlje imamo jedan blok možem pisati ovako u liniji
        
}


// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.

for( var i = 0; i < names.length; i++){
    if(!names[i]){
        names.splice(i, 1);
    }
    
};

console.log(names);


//for(let i = 0; i < niz.length; i++)
// je isto što i  - for(let i = 0; i <= niz.length-1; i++)

//PROUČIT OVO BOLJE