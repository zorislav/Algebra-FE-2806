
var obj = {
    message: 'Hello World',
    age: 33
};

console.log(obj.propertyIsEnumerable('message')); // konzola daje true jer ga ima
//-------------------------------------------------------
var datum = new Date(); // ugrađena datum funkcija

console.log(datum.toString());
console.log(datum.toLocaleString()); // zanimljivo sa datumima, naučit

//------------------------------------------------------------
var Osoba ={ // objelkt se piše velikim slovom???
    ime: 'Perica',
    godine: 27
};


//-----------------------------------JSON
console.log(Osoba);
console.log(JSON.stringify(Osoba)); //PREBACIVANJE U json FORMAT

var jsonAdresa = '{"Ulica": "Ilica", "broj":21, "grad": "Zagreb"}';
console.log(jsonAdresa); // ovo je JSOn File Gore

console.log(JSON.parse(jsonAdresa)); // s ovim smo JSON pretvorili u objekt u javascriptu


//--------------------------------------------- isto JSON - ali toJSON funkcija

var Osoba1 ={ 
    ime: 'Perica',
    prezime: 'Horvat',
    godine: 33,
    toJSON(){
        return this.ime + ' ' + this.prezime + ' ' + this.godine;
    }
};

console.log(JSON.stringify(Osoba1));
//kada objekt ima toJSON funkciju ta funkcija se koristi za pretvorbu u JSON format???
//mora bit ime svojstva toJSON