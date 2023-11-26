//1. zadatak . Dodajte Dog funkciji varijablu "name" koja se postavlja pri
// kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 

function Dog(name) {
	this.name = name || "Rex";
   	this.bark = function() {
		return 'Wuf Wuf';
	}
    
}

//VS code je prepoznao konstruktor funkciju te nam sam predlaže da se može
//pisati kao klasa niže:

// class Dog {
//     constructor(name) {
//         this.name = name || "Rex";
//         this.bark = function () {
//             return 'Wuf Wuf';
//         };
//     }
// }
//ZANIMLJIVO!!!

//2. Zadatak  - 2. Kreirajte objekt iz Dog funkcije.

var dog = new Dog('Skippy');//dali smo argument konstruktor funkciji

var dog2 = new Dog('Rex'); // stvaramo novi objekt iz iste funkcije

console.log(dog.name); 
// konzola ispisuje Skippy, jer su sada metode iz gornje funkcije dio našeg objekta!!!!!!!

//3. zadatak -  Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

Dog.prototype.getName = function (){
    return this.name;
}
//S OVIM GORE SMO PROMINILI KONSTRUKTOR FUNKCIJU, NE OBJEKT!!!! BITNO!!!

console.log(dog.getName());//izvšavamo tu fukciju i dobijamo returniranu vrijednost!
console.log(dog2.getName());
//A SAD I NAŠ OBJEKT IMA TU METODU JER JE PRENEŠENJA - NASLJEĐIVANJEM!!!

//BITNO __PROTO__ SE ODNOSI NA OBJEKT!!!
// A PROTOTYPE SE ODNOSI NA KONSTRUKTOR FUKCIJU!!! i onda svi objeti nasljeđuju nova svojstva!!!