//1
var auto = {
  brend: {
    tip: 'Volvo',
    model: 'V40'
  },
  boja: 'crna',
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 1998,
  ubrzaj: function(brojSekundi){
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1;
    }
    return this.brzina
  },
  zakoci: function(brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20; // this.brzina = this.brzina - 20
      brojSekundi--;
    }
    return this.brzina;
  },
  promijeniBoju: function(novaBoja){
    this.boja = novaBoja;
    return this.boja;
  }
};

//2
console.log(auto.ubrzaj(5));
console.log(auto.zakoci(4));
console.log(auto.boja);
console.log(auto.promijeniBoju("plava"));
console.log(auto.boja);

//3

for (var key in auto) {
  var value = auto[key];
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ': ' + value);
  }
}

// for (var key in auto) {
//   console.log(key);
// }

//4
console.log('Boja mog ' + auto.brend.tip + ' je ' + auto.boja);

//5
console.log(JSON.stringify(auto));

