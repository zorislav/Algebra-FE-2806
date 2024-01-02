
import randomstring from 'randomstring';
//importirali smo random string objekt iz randomstring instaliranog programa,
//tj. librarya
import './App.css';
//IMPORT NAREDBE MORAJU DOĆI NA POČETKU FILEA, ALI SAM REDOSLIJED NIJE BITAN!!!


//ZADATAK
// 1.	Napraviti novu react aplikaciju
// 	2.	Na npmjs.com pronaći neki paket za generiranje random stringa
// 	3.	Instalirati taj paket u novokreiranu aplikaciju, osigurati da je paket naveden i pod dependencies
// 	4.	Iskoristiti instalirani paket za generiranje random stringa

function App() {

  const tmp = randomstring.generate();
  //u varijablu smo spremili funkciju koja generira string na uvezenom objektu

  return (
    <div className="App">
     <p>Moj randomstring {tmp}</p>
     {/* ovo je top samo ubacimo u vitičaste zagrade expresion, i varibla može unutra
     SUPER!!!! ovo je naš tmp od gore u JSD-u unutar JSX koda.
     svaki JS kod je tu TAKO VALIDAN!!! ZAPRAVO KOMBINIRALI SMO HTML ELEMENT
     I JS KOD, TOP TO I JE U STVARI JSX!!! MOGLI SMO ODMA NAPISAT I CILI
     EXPRESION - randomstring.generate() I SVE BI ISTO RADILO*/}
    </div>
  );
}

export default App;
