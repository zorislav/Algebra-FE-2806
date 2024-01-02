import './App.css';

// import  Komponenta1  from './Components/Komponenta1';
// import  Komponenta2  from './Components/Komponenta2';
// import  Komponenta3  from './Components/Komponenta3';
// import  Komponenta4  from './Components/Komponenta4';
//importirali smo svaku komponentu iz njezinog filea, ne index.js-a

import{Komponenta1, Komponenta2, Komponenta3, Komponenta4} from './Components';
//OVO MINJA SVE OVO OD GORE, IMPORTIRAMO SADA ZAPRAVO IZ INDEX.JS SVE 
//ONE EXPORTE OD JEDNOM, ČAK I NE MORAMO NAVODITI TOČAN PATH, NEGO SAMO
// FOLDER!!!

function App() {
  return (
    <div className="App">
      <Komponenta1 />
      <Komponenta2 />
      <Komponenta3 />
      <Komponenta4 />
      {/* komponente se moraju pisati u ovoj sintaksi(React jsx), uključili smo
       importirane od gore */}
    </div>
  );
}

export default App;
