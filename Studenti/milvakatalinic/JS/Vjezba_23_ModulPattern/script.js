//function createSupplier() {
//this.name = "general Motors";
//this.type = "automobile";
//this.year = 1910;

//this.getModelYear = function (){
// return this.year;
//};
//}

//var auto = new createSupplier();
//console.log(auto.getModelYear());
//console.log(auto.year);

const createSupplier = (function () {
  this.name = "General Motors";
  this.type = "automobile";
  this.year = 1910;

  function getModelYear() {
    return year;
  }

  // this.getModelYear = function (){
  // return this.year;
  // };
  return {
    ime: name,
    getName: function () {
      return year;
    },
  };
})();

console.log(createSupplier.ime);
console.log(createSupplier.getName());
//izlozeno je vani samo ono sto je napisano unutar return
//ostali podaci se ne vide
