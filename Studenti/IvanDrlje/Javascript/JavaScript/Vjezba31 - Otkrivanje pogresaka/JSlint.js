
// 1. Kreirajte datooteku app.js slijedećeg sadržaja:
// 2. Pomoću JSLint i ESLint izvršite statičku provjeru koda


/*jslint single devel*/

//OVO JE DIREKTIVA single DA NAM NE UKLJUČUJE JEDNOSTRUKE NAV. KAO GREŠKU!!!
//POSTOJI PUNO OVAKVIH DIREKTIVA, SUPER!!!
// DRUGA DIREKTIVA JE devel KOJA NAM GOVORI DA SMO U DEVELOPMENT
//FAZI, NE U PRODUKCIJSKOJ (pa nam neće npr console.log davati kao grešku(!!!

//Samo je problem kod JSlinta što ga svaki put moramo uključivat putem
//command pallete, iznova!!!

'use strict';





let name1 = 'James';

const person = {first: name1};
//name je svojstvo window objekta pa na VS code upozorava na to
//trebalo bi  stavit drugo ime npr name1 da ne bude problem


console.log(person);

const sayHelloLinting = (fName) => console.log(`Hello linting, ${fName}`);



