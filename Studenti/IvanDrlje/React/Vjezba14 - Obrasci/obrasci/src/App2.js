ZADATAK:
// Potrebno napraviti React aplikaciju koja će imati sljedeće:
// 	1. Potrebno je napraviti formu koja će imati traku za unos teksta i gumb za potvrdu unosa
// 	2. Korisničkom interakcijom potrebno je spremati tekst u stanje (state) komponente
// 	3. Pritiskom Pocetno stanjena tipku, potrebno je ispisati tekst na ekranu



import {useState} from 'react';
import './App.css';





function App () {


const [name, setName] = useState('');
//dstruktuiranje i stavljanje početkog stanja na prazan string


//event handler funkcija koja minja stanje
const handleChange = (event) => {
    setName(event.target.value);
    //postavljamo novo stanje
}


const handleSubmit = (event) => {
    event.preventDefault();
    //zaustavljamo standardno relodanje i slanje obrasca
    alert(`Ime: ${name}`);
    setName('');
    //resetiramo na novo stanje!!!

}


    return (
      <div className="App">
        <h1>Obrasci 1</h1>

        <form onSubmit={handleSubmit}>
          {/* Osluškujemo onSubmit događaj te tada pozivamo neku funkciju */}
          <label htmlFor="ime">Ime</label>
          {/* htmlFor je isto što i for u htmlu - za vezu sa id-om u inputu */}
          <input id='ime' type='text' value={name} onChange={handleChange}></input>
          {/* Sa ovim imput value lokalno stanje spuštamo u vrijednost imout elementa */}
          {/* To se zove 2 way biding jer povezujemo u oba smjera!!! */}
          <button>Pošalji</button>
        </form>
     
      </div>
    );
  }



export default App;
