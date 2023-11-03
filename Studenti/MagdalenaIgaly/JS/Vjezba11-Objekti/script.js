// 1. dio
var auto = {
    brend: {
        tip: 'Volvo',
        model: 'V40'
    },
    boja: 'crvena',
    brzina: 60,
    maxBrzina: 160,
    godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi) {
        while(brojSekundi && this.brzina <= this.maxBrzina ) {
            this.brzina += 5;
            brojSekundi--;
        }
        return this.brzina;
    },
    zakoci: function(brojSekundi) {
        while (brojSekundi && this.brzina > 0) {
            this.brzina -= 20;
            brojSekundi--;
        }
        return this.brzina > 0 ? this.brzina : 0;
    },
    promijeniBoju: function(novaBoja){
        this.boja = novaBoja;
        return this.boja;
    }
}

// 2. dio
console.log(auto);
console.log(auto.ubrzaj(5));
console.log('auto.zakoci(7) : ' + auto.zakoci(7));
console.log('Nova boja = ' + auto.promijeniBoju('plava'));
console.log('auto.boja = ' + auto.boja);

// 3. dio
for (var key in auto) {
    var value = auto[key];

    if(auto.propertyIsEnumerable(key)) {
        console.log(key + ': ' + value);
    }
}

// for (var key in auto) {
//     console.log(key);
// }

// 4. dio
console.log('Boja mog ' + auto.brend.tip + ' je ' + auto.boja);

// 5. dio
console.log(JSON.stringify(auto));