// Primjer 1
var obj = {
    message: "Hello world!",
    age: 33
};

console.log(obj);
console.log(obj.propertyIsEnumerable("ime"));
console.log(obj.message);  // Najcesce koristimo ovo
console.log(obj.age);  // Najcesce koristimo ovo
console.log(obj.age.toString());
console.log(obj.toString());
console.log(obj.valueOf());
console.log(obj.message.valueOf());
console.log(obj.age.valueOf());

// Primjer 2
var datum = new Date();

console.log(datum);
console.log(datum.toString());
console.log(datum.toLocaleString());

// Primjer 3 - Object to JSON string
var Osoba = {
    ime: "Perica",
    godine: 27
}

console.log(Osoba);
console.log(JSON.stringify(Osoba));

// Primjer 4 - JSON to Object
var AdresaJson = '{ "ulica": "Ilica", "broj": "21" , "grad": "Zagreb"}';
console.log(AdresaJson);

var AdresaObject = JSON.parse(AdresaJson);
console.log(AdresaObject);
console.log(AdresaObject.ulica);
console.log(AdresaObject.broj);
console.log(AdresaObject.grad);

// Primjer 5 - toJSON
var Osoba1 = {
   ime: 'Perica',
   prezime: 'Horvat',
   godine: 33,
   toJSON() {
    return this.ime + ' ' + this.prezime + ' ' + this.godine;
   } 
}
console.log(JSON.stringify(Osoba1));