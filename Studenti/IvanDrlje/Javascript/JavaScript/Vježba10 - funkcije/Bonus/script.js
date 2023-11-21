
 //1. ------------------
function mojaFunkcija(p){
    return p + 1;
};

console.log(mojaFunkcija(2));


//---------------------------
//2.

var mf2 = function(p){
    return p + 2;
};

console.log(mf2(2)); // isto smo je pozvali putem spremanja u varijablu

//-------------------------------------

var mf3 = () => {
    return p + 3;
}

console.log(mf3);