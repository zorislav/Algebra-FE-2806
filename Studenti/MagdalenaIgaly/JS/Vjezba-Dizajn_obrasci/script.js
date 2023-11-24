// Singleton

class Singleton {

    constructor(){
        if(!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    static getInstance() {
        return this.instance;
    }
}

var obj1 = new Singleton();
console.log(obj1);

var obj2 = new Singleton();

console.log(obj1.getInstance);
console.log(obj1.getInstance === obj2.getInstance);

// Factory

function vehicleFactory(manufacturer, plateNo) {
    return {
        manufacturer,
        plateNo,
        startEngine() {
            console.log('Starting engine');
        },
        drive() {
            console.log('Driving...');
        }
    }
}

var car1 = vehicleFactory('Toyota', 'RI');
console.log(car1);
car1.startEngine();

car2 = vehicleFactory('Ford', 'OS');
console.log(car2);