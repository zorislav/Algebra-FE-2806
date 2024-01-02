// function createSupplier(){
//   this.name = "general Motors";
//   this.type = "automobile";
//   this.year = 1910;

//   this.getModelYear = function(){
//     return this.year;
//   }
// }

// var auto = new createSupplier();

// console.log(auto.getModelYear());
// console.log(auto.year);

const createSupplier = (function () {
  const name = "General Motors";
  const type = "automobile";
  const year = 1910;

  // this.getModelYear = function(){
  //   return this.year;
  // }

  return {
    name,
    getName: function () {
      return getModelYear();
    },
  };
})();

console.log(createSupplier.name);
console.log(createSupplier.getName());
console.log(createSupplier.getModelYear());
