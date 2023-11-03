// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
//2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
//3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
//4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
//5. Pretvori svoj objekt u JSON string.

//
// 1. dio
var auto = {
  brend: {
    tip: "Mazda",
    model: "3",
  },
  boja: "plava",
  brzina: 60,
  maxBrzina: 160,
  godinaProizvodnje: 2012,
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 5;
      brojSekundi = brojSekundi - 1;
      console.log(this.brzina); //opcijalno da se vidi ubrzanje
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi && this.brzina > 0) {
      this.brzina -= 20; //this.brzina = this.brzina -20;
      brojSekundi--; //brojSekundi = brojSekundi - 1;
      console.log(this.brzina); //opcijalno da se vidi kocenje
    }
    //return this.brzina;
    return this.brzina > 0 ? this.brzina : 0;
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
    return this.boja;
  },
};

// 2. dio
console.log(auto.brzina);
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(6));
console.log(auto.boja);
console.log(auto.promijeniBoju("crna"));

// 3. dio
for (var key in auto) {
  var value = auto[key];
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ": " + value);
  }
}

for (var key in auto) {
  console.log(key); // opcijalno ispisujemo kljuceve
}

// 4. dio
console.log(
  "Moja " + auto.brend.tip + " " + auto.brend.model + " je " + auto.boja + " iz " + auto.godinaProizvodnje + ". godine."
);

// 5. dio
console.log(JSON.stringify(auto));
