
var obj = {
    num: 2
};
//---------------------------------------------------------------------------------
// metoda call - poziv!!!

function add (a){
    console.log(this.num);
    return this.num + a;
}

console.log(this); // daje window(glavni) objekt!!!

//sa metodom call povezujemo ovaj naš objekt i našu funkciju, ona prima 2 parametra
//želimo da se this odnosi na naš objekt

var b = add(3); // NaN zato jer JS ne prepoznaje što je this.num - logično
console.log(b);//undefined

var c = add.call(obj, 3);//ali ovdje dodajemo metodu call koja kao prvi parametar
//uzima naš objekt i tako ga povezujemo, a drugi parametar je bilo šta što bi inače stavili u funkciju, ovdje 3

console.log(c); // onda konzola zbraja 2 + 3 i daje 5!!!

//-----------------------------------------------------------------------------------
// metoda apply - primjeni slično kao call, samo je drugi argument niz, više argumenata
//jako slično, samo razlika u urgumentima u nizu!!!!!!!

function add2(a, b){
    return this.num + a + b;
}

var d = add2.apply(obj, [3, 5]);
console.log(d);


//--------------------------------------------------------------------------------
//bind - poveži - 
// bind ne izvršava funkciu, nego vraća novu funkciju, i zato je treba izvršiti sa ()!!!


function add3 (a){
    console.log(this.num);
    return this.num + a;
}

var e = add3.bind(obj, 6); // bind ne izvršava funkciju, nego vraća novu funkciju!!!
console.log(e);
console.log(e()); //Zato je samo treba izvršiti sa () i sve ok!!!






