
ispis();

function ispis (){
    console.log('Hello World');
}

//ovakvo pozivanje standardne funkcija moguće je, znači pozivanje prije deklaracije,
//to se zove hoisting, zato šta u tom slučaju JS prebacuje deklariranje na vrh programa pa onda već,
//ima u memoriji fukciju kad se poziva!!! Ovo radi samo kod klasičnih funkcija, ne drugih!!!


// ispis2();

// const ispis2 = ( )=>{
//     console.log('Hello World2');
// }

//ovo ne radi kod arrow funkcije, daje grešku!!!

//---------------------------------------------------------------------------------------

var x = 2;
function ispis3 (){
    var x = 1;
    console.log(x);
}

ispis3();
console.log(x);
