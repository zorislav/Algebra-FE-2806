'use strict';

// 1. Instalirajte Jest framework (pratite upute ovdje: https://jestjs.io/docs/en/getting-started)
// 2. Napišite test koji testira kod u script.js. Iskoristite bar dvije funkcije podudarnosti.
// 3. U slučaju da test ne prolazi, ispravite grešku i ponovite test dok ne prođe!


function findMax(numbers) {
    //lipa funkcija za traženje najvećeg broja u nizu!!!
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
    return max;
  }
  
  
const niz = [1,2,4,3];

let maks = findMax(niz);
console.log(maks);


module.exports = findMax;
//ovo je export funkcija zapravo i sa njom ćemo prebaciti funkciju u 
//script.test.js