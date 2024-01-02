//class Dog {
//constructor(name) {
// this.name = name || "Rex";
//this.bark = function () {
//return "Wuf Wuf";
//};
//}
//};

// 1
function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
}

// 2

var dog = new Dog("Skippy");
vardog1 = new Dog("Rex");

// console.log(dog.name);

// 3

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog.getName());
console.log(dog1.getName());

//_proto_objekt
// prototype konstruktor funkcija
