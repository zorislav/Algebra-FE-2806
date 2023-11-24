// Primjer 1
function vratiNesto(x) {
    return function() {
        return x;
    }
}
var y = vratiNesto(true);
console.log(y());

// Primjer 2
function vanjska() {
    var poruka = 'Bok svima ;)';

    function unutarnja() {
        console.log('Poruka : ' + poruka);
    }

    unutarnja();
}
vanjska();

// Primjer 3
const counter = (function() {
    
    let privateCounter = 10;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment(){
            changeBy(1);
        },
        value(){
            return privateCounter;
        }
    };
})();

counter.increment();
console.log(counter.value());
console.log(counter.privateCounter);
