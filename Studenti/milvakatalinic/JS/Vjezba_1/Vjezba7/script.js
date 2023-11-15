// 1. Napišite while petlju koja će ispisivati brojeve
// od 3 do 20, osim onih djeljivih sa 9.

//Opcija 1

//var i = 3;
//while (i <=20) {

//    if (i % 9 !==0) {
//        console.log(i);
//    }
    
//    i = i+1;
    //ili i++;
//    }

// Opcija 2
var i = 2;

while (i < 20) {

    i = i+1; //inkrement je morao doci prije testiranja, 
             //prvi br koji testiramo onda ce bit 4(a treba bit 3)
             //zato i smanjujemo na 2
    if (i % 9 ===0) {
        continue;
    }
    console.log (i);
}

// 2. Koja je vrijednost isprintana u konzoli?
//rezultat je 16

var varOne = 0;

for (i = 0; i < 4; i++){ // i->0,1,2,3: 4x nesto se radi
    for (j = 0; j < 4; j++){// i-> 0,1,2,3 4x
        varOne++;
        console.log('i:' + i + 'j:' + j + 'varOne;' + varOne);
    }
}
console.log(varOne);