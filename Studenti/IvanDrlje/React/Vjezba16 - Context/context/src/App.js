// ZADATAK:
// 1) Napraviti Context komponentu
// 	2) Napraviti četiri nested komponente
// 	3) Postaviti App komponentu kao Context Provider i poslati neki tekst i broj
// 	4) Postaviti zadnju komponentu kao Context Consumer
// 	5) U komponenti definiranoj funkcijom ispisati na ekranu tekst koji je poslan preko Context-a
// 	6) U komponenti definiranoj funkcijom koristiti tekst poslan preko Context-a kao varijablu
// 	7) Napraviti novu komponentu definiranu klasom koju poziva Komponenta 4, a isto treba ispisati vrijednosti Context-a na ekranu i koristiti kao varijablu


import './App.css';
import { Provider } from './context/Kontekts';
import Komponenta1 from './components/Komponenta1';
import { useState } from 'react';




function App() {


  const [number, setNumber] = useState(0);
  //opet destruktuiranje useState koji daje stanje i funkciju za minjanje stanja


  function textChangeHandler(event){
    
   setNumber(event.target.value) ;
   //znači sada će biti ovo lokalno stanje baš stanje input elementa,
   //jer smo ga minjali sa setnumber funkcijom!
  }


  return (
    <div className="App">
      <Provider value={{text: 'Komponenta 4 je najbolja', number: number, reset: () => setNumber(0)}}>
        {/* Ovaj value atribut je vrijednost koju želimo prenijeti u naš Kontext!!! */}
        <h1>App komponenta</h1>
        <label>
          Postavi u kontext:
          <input type='number' value={number} onChange={textChangeHandler}/>
          {/* Value povezujemo sa numberom od gore, a onChange će biti funkcija
          koja će se izvršiti kada se promjena desi */}
        </label>
        <Komponenta1/>
      </Provider>
      {/* Provider će biti omotač za ostale komponente */}
    </div>
  );
}

export default App;
