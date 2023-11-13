// class Dog {
//     constructor(name) {
//         this.name = name || "Rex";
//         this.bark = function () {
//             return 'Wuf Wuf';
//         };
//     }
// }

// Prvi dio
function Dog(name) {
	this.name = name || "Rex";
   	this.bark = function() {
		return 'Wuf Wuf';
	}
}

// Drugi dio
var dog = new Dog('Bonica <3');
// console.log(dog.name);

var dog2 = new Dog();
// console.log(dog2.name);

// Treci dio
Dog.prototype.getName = function() {
    return this.name;
}
console.log(dog.getName());