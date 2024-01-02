/*Zadatak nam je kreirati node modul koji nam izpisuje tip podataka iz vrijednosti koje smo mu poslali.
Modul je ovisan o lodash biblioteci.

1. Inicijalizirajte node modul u folderu. Dodajte sve nužne podatke o modulu.
2. Instalirajte lodash paket i dodajte u ovisne pakete (dependencies).
3. Napišite funkciju koja provjerava tip prodatka na temelju parametara i ispisuje ju. Exportajte ju.
4. Izdajte svoj paket na npm.js*/


//lodash
const _ = require('lodash');
//ovo je preuzimanje lodash podataka!!!
// _ je glavni objekt koji je exportiran iz Lodasha!!!
//sve za preuzimanje piše na početnoj stranici lodasha!!!

//LODASH MODUL UKLJUČUJEMO PREKO NPM-A U TERMNALU!!!
//u terminalu upisujemo npm init -y za kreaciju novog projekta!!!
//i dobijamo package.json datoteku u našem folderu
//SLJEDEĆI KORAK JE npm instal lodash,i onda dobijamo node modules folder
//i dependencies koji vidimo u package.json fileu

//DALJE U TERMINAL UPISUJEMO NPM LOGIN IVANDRLJE(MOJ NPM), tako se logiramo na
//moj account na NPMjs.com, terninal mi javlja  - Logged in on https://registry.npmjs.org/.
//SLJEDEĆE UPISUJEMO U TERMINAL - NPM PUBLISH
//PAKET NAM JE SAD POSLAN I OBJAVLJEN NA NPMJS.COM!!!!
//BITNA NAPOMENA DA SU SVI TI PODACI SADA JAVNI!!!!



function getType (e){

    if(_.isNumber(e)){
        console.log(`${e} is number`);
    }//provjeravamo jel parametar e broj

    if(_.isString(e)){
        console.log(JSON.stringify(e) + 'is string');
    }//ako je e objekt pretvaramo ga u JSON string podatak i provjera jel string

    if(_.isArray(e)){
        console.log(JSON.stringify(e) + 'is array');
    }//provjera jel niz

    if(_.isObject(e)){
        console.log(JSON.stringify(e) + 'is Object');
    }//provjera jel objekt

    
};


module.exports = getType;
//exportiramo našu funkciju kao modul

