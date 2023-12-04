

/*var names = [ 'John', 'Jane', 'Mike'];
names.forEach(function(element){ //parametar anonimne funkcije je tekući element, ili neki i zapravo
    //možemo ga nazvat kako oćemo
    console.log(element);
});

//ovo je anonimna funkcija, bitno naučit
FOR EACH JE ZAPRAVO PETLJA, KAO FUNKCIJA ZA NIZOVE, slično for of petlji
----------------------------------------------------------
var noviNiz = names.map(function (element){
    return 'Ime: ' + element;
});

NOVI NIZ SADA IZGLEDA  - [ime: 'john', .... ]
console.log(noviNiz);
BITNO JE DA MAP VRAČA NOVI NIZ, ZATO SE I SPREMA U VARIJABLU!!!
ELEMENT JE MOGLA BITI I BILO KOJA DRUGA VARIJABLA, BITNO JE ZA NAGLASITI DA JE TO ELEMENT NIZA



//-----------------------------------------------------------------------------

//
var matrix = [ [1,2,3], ['John', 'Jane', 'Mike']];
console.log(matrix[0][1]); //konzola daje 2
console.log(matrix[1][2]);
matrix[0][4] = 5; // DODALI SMO NOVI ELEMENT, ALI JE BR4. OSTAO KAO PRAZAN SKUP!!!
console.log(matrix);//zato konzola daje na index 4 <1 empty item>!!!
matrix[1] = [];
console.log(matrix); // ovdi kao drugi dio dobijemo prazan niz
*/
//---------------------------------------------------------------

let x = 1;
let y = x++;
console.log(x); // 2
console.log(y); // 1

//NAUČIT ZAŠTO JE OVO - zato što je to zapravo x = x + 1!!!


let iko = '1';
let mate = '';

let z = (!!x) ? 'Da' : 'Ne';

console.log(typeof(!!iko));
console.log(!!iko);
console.log(typeof(!!mate));
console.log(!!mate);
console.log(z);


//----------------------------
//primjer filter metode!!!

var niz = [1,2,3];

for( var i = 0; i <= niz.length - 1;i++){
//ovdi je niz.length -1 jer je <= uvjet, da je drugačiji može i normalni
//zato da prođe sve dijelove niza
}
var niski = niz.filter(function filterFunkcija(element){
    if(element !== 2){
        return true;
    } else{
        return false;
    }
});
console.log(niski); //imamo samo 1 i 3

//---------------------------------------
niz.forEach(function forEachFunkcija(element){
    //?? dalje
})




let iskra = new Array(5);
console.log(iskra);
//ovo je kreiranje niza putem KONSTRUKTOR FUNKCIJE, novi niz sa 5 praznih mjesta