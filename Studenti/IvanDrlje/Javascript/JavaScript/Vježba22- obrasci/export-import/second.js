//ovo naravno vrijedi samo ako je first u istom folderu, ako ne triba nać i drugi trag /folder

import {module1, niz} from './first.js';
//OVAKO SE IMPORTIRA PODATAK IZ DRUGE DATOTEKE, ALI ČITA SE U BROVSERU I MORA IĆ 
//U HTMLU NAREDBA TYPE 'MODULE'

//inače se ovo naziva named export, jer je po imenu, dolje je default export

console.log(module1.x);
console.log(module1.z());

module1.y();

console.log(niz);

//OVO VRIDI SAMO ZA BROWSER!!!

//ako bi tili importirat neki objekt a koristit ga pod drugim imenom stavimo ovako:
//import {module1 as mojObjekt} from './first.js';
//i onda ga možemo koristiti isto kao prije sa pozivom mojObjekt.x - ispisuje 1 !!!

//--------------------------------------------------------------------------------
//DRUGI NAČIN IMPORTA

import tekst1 from './first.js';

console.log(tekst1);

///KADA IMPORTIRAMO OVAKO NEŠTO PREKO EXPORT DEFOLTA, NE TREBAJU NAM {} KAO I GORE
//JER TOČNO ZNAMO NA ŠTO SE DOKUMENT ODNOSI!!!
//ALI OVO VRIJEDI SAMO ZA JEDAN ELEMENT, NE VIŠE KAO GORE
//Bitno je i da ime modula, npr tekt gore  ne mora odgovarati kao u exportu, pa ga možemo
//minjati sa as, ali kod druge opcije ga možemo minjati odmah KOD IMPORTA I RADIT ĆE!!!
//OVDE SMO TEKST STAVILI DA JE TEKST1 I RADI!!! AL MOŽE OSTAT I ISTO IME NARAVNO
