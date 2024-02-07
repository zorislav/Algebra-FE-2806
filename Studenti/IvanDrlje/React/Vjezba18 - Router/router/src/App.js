// ZADATAK:
// 1.	Napraviti novu react aplikaciju
// 	2.	Očistiti aplikaciju od početne stranice
// 	3.	Promijeniti naslov (title) i favicon aplikacije
// 	4.	Napraviti ukupno četiri komponente u aplikaciji svaka komponenta mora prikazivati neki tekst (App + tri nove komponente)
// 	5.	Instalirati paket  react-router-dom u aplikaciju i osigurati da je react-router-dom postavljen pod dependencies aplikacije
// 	6.	Kosititi react router za prikazivanje različitih komponenti u aplikaciji, za različite web adrese (npr. http://localhost:3000/kontakt/)
// 	7.	Dodati navigacijske linkove na vrh stranice, koje bi mijenjale web adrese i prikazivale druge komponente.



import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';



//Nova f. komponenta
function Index () {

  return(
    <>
      <h1>Welcome to Router</h1>
      <p>Ovo je primjer korištenja React Routera</p>
      <p>Sad sam na početnoj stranici</p>
    </>
  );
}



//Druga nova f. komponenta
function Komponenta1 (){

  return(
    <>
      <h1>Welcome to Komponenta1</h1>
      <p>Ovo je primjer korištenja React Routera</p>
      <p>Sad sam na po Komponenti 1</p>
    </>
  );
}




//Treća nova f. komponenta
function Komponenta2 (){


  const navigate =  useNavigate();
  //Posebna funkcija uvezena, za prelaz iz stranice klikom na tipku

  function clickHandler () {
    navigate('/');
    //KAO ARGUMENT KOD POZIVANJA FUNKCIJE NAVIGATE STAVLJAMO PUTANJU!!!

  }

  return(
    <>
      <h1>Welcome to Komponenta2</h1>
      <p>Ovo je primjer korištenja React Routera</p>
      <p>Sad sam na po Komponenti 2</p>
      <button onClick={clickHandler}>Home</button>
    </>
  );
}







function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            {/* OVO JE KAO PRAVI LINK KAO U HTML-U , ovdi vodi na home
            stranicu*/}
          </li>
          <li>
            <Link to='/k1'>Home</Link>
            {/* Ovaj vodi na komponentu 1 ... */}
          </li> 
          <li>
            <Link to='/k2'>Home</Link>
          </li>
        </ul>
      </nav>
      {/* OVO SU GORE KAO PRAVI LINKOVI, BEZ REALODANJA STRANICE!!! */}

      <Routes>
        {/* ovo je osnovna komponenta koja definira naše rute */}
        <Route path='/' element={<Index/>}/>
          {/* ovo je zapravo gore di je/ samo se ne piše http://localhost:3000 */}
          {/* Element je react element koji učitavamo kada smo na toj adresi */}
          {/* Index je implemnentacija one nove komponente od gore */}
          <Route path='/k1' element={<Komponenta1/>}/>
          {/* OVO JE ZAPRAVO KA NEKI UNUTARNJI LINK, PRIBACUJEMO SE NA 
          novu ADRESU ALI BEZ PROMJENE ADRESE STRANICE, SADA NA NOVU
          KOMPONENTU - ovdi kada u brovseru dodamo K1 prebacuje nas
          na novu komponentu K1 bez realoada */}
          <Route path='/k2' element={<Komponenta2/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
