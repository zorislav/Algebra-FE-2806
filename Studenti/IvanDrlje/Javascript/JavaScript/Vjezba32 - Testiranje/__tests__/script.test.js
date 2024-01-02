
const maxnumber = require('../script.js')
//spremamo u varijablu, import iz našeg script filea - ovaj require JE UMISTO
// IMPORTA, OVO ĆE U KONAČNICI BITI IMPORT NAĐE EXPORTIRANE FUNKCIJE
//findMax

const testArray = [1,4,5,89,43,2,-1];


test('Get max number', () => {

    expect(maxnumber(testArray)).toBe(89);
    //znači u metodu expect ubacujemo našu importiranu funkciju i njoj stavimo
    //kao argument ovaj gore nizi onda dodamo metodu toBe gdje u zagradama
    //ubacujemo očekivano rješenje!!!

});
//ovo je definicija testa, u testu prvi parametar je ime testa u navodnicima,
//a drugi parametar funkcija što se radi u testu(slično kao eventlistener)!!!


//ONDA U TERNIMALU TESTIRAMO SA npm run test !!!


//ovo je dodatni test
test('Get number', () => {

    expect(maxnumber(testArray)).not.toBeNaN();
    //ovo testira da bude broj, ne smi bit NaN!!!

});

//NA WEB STRANICI JEST-A MOŽEMO NAĆI SVE DETALJE TESTIRANJA, KAKO ŠTA KAD ITD!!!
//u velikim organizacijama ovo rade ljudi zaduženi za testiranje - testeri!!!