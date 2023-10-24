// Primjer 1
function mojaFunkcija(p) {
    return p + 1;
}

console.log('mojaFunkcija(2) = ' + mojaFunkcija(2));


// Primjer 2 (Anonimna funkcija) - mf2 se moze pozvati tek nakon sto ju definiramo
const mf2 = function(p){
    return p + 2;
}

console.log('mf2(3) = ' + mf2(3));


// Primjer 3 (Arrow function)
const mf3 = (p) => {
    return p + 3;
}
console.log('mf3(3) = ' + mf3(5));
