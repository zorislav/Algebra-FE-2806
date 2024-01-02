// //ZADATAK
// 1	Napraviti novu aplikaciju
// 2.	Unutar App.js datoteke napraviti jednu komponentu definiranu funkcijom koja vraća JSX s tekstom.
//     Unutar App komponente potrebno je prikazati komponentu.
// 3.	Unutar App.js datoteke napraviti jednu komponentu definiranu klasom koja vraća JSX s tekstom.
//     Unutar App komponente potrebno je prikazati komponentu.
// 4.	Potrebno je prebaciti svaku komponentu unutar svoje datoteke. Prikazati ih unutar App komponente.

import './App.css';
import WelcomeFunction from './WelcomeFunction.jsx';
//importirali smo funkcijsku komponentu iz njene datoteke
import WelcomeClass from './WelcomeClass.jsx';
//importiramo klasnu komponentu!


function App() {
  return (
    <div className="App">
      <WelcomeFunction />
      {/* I OVDE UBACUJEMO NAŠU NOVU KOMPONENTU U OBLIKU SAMOZATVARAJUĆEG
      JSX ELEMENTA(SLIČNO KAO HTML)!!! */}
      <WelcomeClass />
      {/* OVDE SMO UKLJUČILI NAŠU NOVU KOMPONENTU DEFINIRANU KLASOM!!! */}
    </div>
  );
}

export default App;
