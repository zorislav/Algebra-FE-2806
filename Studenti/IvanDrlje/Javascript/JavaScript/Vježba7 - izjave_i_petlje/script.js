//opcija 1 -----------------------------------------------------------

var i = 3;

while (i <= 20) {

   if(i % 9 !== 0){
        console.log(i);
            // nastavljamo sa sljedećom operacijom u petlji
            //ako je i % 9 === 0 onda će ići continue u bloku, da ga presskočimo
    }

    
  
    i++; // i = i + 1;
    //console.log(i); - da smo stavili print u konzoli ovdi printa bi od 4 - 21 jer inkrementira korak nakon!!!
}

//OPCIJA 1 JE BOLJA RECIMO U PRAKSI SE VEĆINOM INCREMENT POSTAVLJA NA KRAJU UVJETA!
//opcija 2-----------------------------------------------------------

/*var i = 2; // jer smo prebacili increment gore smanjujemo  za 1, jer se radi inrement prije provjere

while (i < 20) {  //moramo staviti do 20 jer ga uvećavamo isprid, ne <= 20, bia bi 21
    i++; // increment prebacujemo ga gore, jer ovako ostaje u petlji na 9!!!!
         //jer sa continue preskačemo iteraciju i petlja završava na 9!!!!
    if(i % 9 === 0){
        continue;
        
        }
    

       console.log(i);
    
}*/

//PROUČIT DOBRO OPET! PRIMJER 1 I 2 ZANIMLJIVO


//---------------------------------------------------------------------------
//ZADATAK 2.


var varOne = 0;

for (let i = 0; i < 4; i++){  // i -> 0,1,2,3  - 4x puta se radi
    for (var j = 0; j < 4; j++){  // j -> 0,1,2,3  - 4x puta se radi
        varOne++;
        console.log('i: ' + i + ' j: ' + j + ' varOne: ' + varOne); // OVO JE DOBRO ZA NAUČIT
    }
    
}

console.log('varOne: ' + varOne);
//PROUČIT OVO DOBRO, lipo objašnjeno ZA DVOSTRUKE PETLJE

