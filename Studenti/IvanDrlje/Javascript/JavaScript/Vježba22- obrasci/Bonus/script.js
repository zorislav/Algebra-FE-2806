
//----------------------------------------------------
//singleton clasa

class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
   
    static getInstance(){
        return this.instance;
    }
}

var obj1 = new Singleton();
console.log(obj1);

var obj2 = new Singleton();


console.log(obj1.getInstance === obj2.getInstance);



var obj = {

}
//ovaj je uvik samo singleton, a ovi gori nisu nego su uvik isti objekti

//OVO JE MALO NAPREDNO A NIJE BAŠ TOLIKO SAD BITAN

//-----------------------------------------------------------
//faktory pattern, faktory uzorak

function vehicleFactory (manufacturer, plateNumber){
    return {
        manufacturer,
        plateNumber,
        startEngine(){
            console.log('Starting engine');
        },
        drive(){
            console.log('driving');
        }
    }
}

console.log();
// - ovo u objektu je skraćeno, kada je ime i neka vrijednost koju želimo staviti ista
//možemo pisati i ovako u jednom redu to je isto kao da smo pisali manufacturer: manufacturer!!!
//isto tako za funkciju - drive: function()...  BITNO!!!

var car1 = vehicleFactory('Toyota', 'RI');
console.log(car1);//konzola vraća kao key i argument value - zanimljivo!!!
console.log(car1.startEngine());
//ovo sad možemo pozvati kao svojstvo/metodu objekta!!!

var car2 = vehicleFactory('Ford', 'OS');
console.log(car2); // dobijamo dva različita objekta od jedne funkcije