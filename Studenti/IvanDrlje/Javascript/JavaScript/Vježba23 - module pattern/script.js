
// function createSupplier(){
//     this.name = 'general Motors'
//     this.type = 'automobile';
//     this.year = 1910;

//     this.getModelYear = function(){
//         return this.year;
//     }
// }

// var auto = new createSupplier();

// console.log(auto.getModelYear());
// console.log(auto.year);
// OVO JE KAO BIO POČETNI DIO, I IZ NJEGA ŽELIMO NAPRAVITI SAMOPOZIVAJUĆU ANO. FUNKCIJU



const createSupplier = (function(){
    const name = 'General Motors'
    const type = 'automobile';
    const year = 1910;

    function getModelType (){
        return year;
     }

    return {
        name,
        getName: function(){
            return year;
        },
        getType: function(){
            return getModelType();
        }

    }

})();

console.log(createSupplier); //konzola daje undefined, POSLIJE DAJE OBJEKT
console.log(createSupplier.name); // konzola daje grešku, opet undefined - podaci su zaštićeni, POSLIJE DAJE VRIJEDNOST SVOJSTVA NAME!!!
//da nešto možemo koristiti u ovakvoj funkciji moramo imati vraćenu vrijednos - return
//sada kada smo u funkciji vratili name(kao svojstvo novog objekta) onda joj možemo pristupiti!!!
//OVDI JE BITNO DA JS ZAPRAVO NE VIDI UOPĆE ANONIMNU FUNKCIJU, NEGO SAMO ŠTO JE RETURNIRANO
//IZ NJE, U OVOM SLUČAJU TO JE SAMO OBJEKT SA JEDNIM SVOJSTVOM I VRIJEDNOŠĆU!!!
//createSupplier JE SADA JEDAN OBIČNI OBJEKT ZA JS!!!

//OVO JE MODULE PATTERN, NEMA PRISTUPA IZ VANI OSIM AKO VRIJEDNOSTI NE VRATIMO

console.log(createSupplier.getName());
//s ovim smo fukcijom izložili godinu pa je možemo koristiti pozivom na FUNKCIJU!!!


console.log(createSupplier.getType());
//s ovim smo fukcijom izložili tip, koji je returniran kao return UNUTARNJE funkcije
// pa je možemo koristiti u novoj RETURN fukciji pozivom na tu UNUTRANJU FUNKCIJU!!!


console.log(createSupplier.getModelType());//ne možemo pozvati unutarnju funkciju ovako,
//konzola daje grešku jer je ona ZAŠTIĆENA I ZA JS NE POSTOJI!!!