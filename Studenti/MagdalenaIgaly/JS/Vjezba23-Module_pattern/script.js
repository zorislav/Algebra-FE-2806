// function createSupplier() {

//     this.name = "general Motors",
//     this.type = "automobile",
//     this.year = 1950,

//     this.getModelYear = function() {
//         return this.year;
//     }
// }

// var auto = new createSupplier();
// console.log(auto.getModelYear());
// console.log(auto.year);

const createSupplier = (function() {

    const name = "general Motors";
    const type = "automobile";
    const year = 1950;

    // this.getModelYear = function() {
    //     return this.year;
    // }

    return {
        ime: name,
        getName: function() {
            return year;
        }
    }
})();

console.log(createSupplier.ime);
console.log(createSupplier.getName());
