var auto = {
	brend: {
		tip: 'Volvo',
		model: 'V40',
	},
	boja: 'crvena',
	brzina: 60,
	maxBrzina: 160,
	godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi){
		while (brojSekundi && this.brzina <= this.maxBrzina) {
			this.brzina = this.brzina += 5; 
			brojSekundi = brojSekundi -1;
		}
		return this.brzina;
	},
	zakoci: function(brojSekundi){
		while (brojSekundi && this.brzina > 0) {
			this.brzina -= 20; //this.brzina = this.brzina -20;
			brojSekundi--;
		}
		//return this.brzina;
		return this.brzina > 0 ? this.brzina : 0;
	},
	promijeniBoju: function(boja) {
		this.boja = novaBoja;
		return this.boja;
	}
}

console.log(auto.zakoci(5)); //sa metodama ubrzaj i zakoci, mjenjamo svojstvo koje je brzina. 
console.log(auto.ubrzaj(10));// metoda ubrzaj i zakoci racuna od trenutne vrijedsti brzine,
							// a to znaci da ona ne mora biti pocetna vrijednost brzine.
							//zato rezultati mogu varirati

for (key in auto) {
	const value = auto[key];
	
	if (auto.propertyIsEnumerable(key)) {
		console.log(key + ': ' + value);
	}
}

console.log('Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja);
console.log(JSON.stringify(auto));