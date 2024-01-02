import logo from './logo.svg';
//Importiramo logo znak iz logo .svg filea unašem folderu
import './App.css';
//importiramo css kod iz App.css filea iz našeg foldera, to što se gornji logo
//vrti je pokrenuta animacija u ovom css fileu

function App() {
  return (
    <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>   */}
      <p>Moja prva aplikacija</p>
      {/* ovaj paragraf smo naknadno ubacili po zadatku */}
    </div>
  );
}

//Ovo je neki gore React kod!!! Izgleda kao neki HTML, al nije, TO JE JSX KOD!!!
//To jest - JavaScript XML, kod koji se većinom koristi u Reactu. To je kao
//neka sintaktička kombinacija JS i HTML koda, da nam bude intiutivniji.
//OVO GORE JE NAŠA KOMPONENTA, ZAPRAVO TO JE U USNOVI FUNKCIJA!!!
//Isto tako komponenta MORA VRATITI NEŠTO SA RETURN!!!, a ono što komponenta
//vrati sa return će biti prikazano na ekranu!!!
//Ako imamo jedan red u returnu možemga pisat standarno u nizu, ali ako imamo 
//više redova kao u ovom primjeru moramo ga pisati unutar običnih zagrada()!!!
//Renderiranje komponente zanči kad se desi bilo kakva promjena u našem kodu 
//komponente React će ponovo izvršiti ovu fukciju, i ako imamo neki drugi kod
//u njoj, osim ovog returna i on će se opet izvršiti, to je bitno da znamo!!!
//AKO NEKI DIO OVOG KODA STAVIMO POD KOMENTAR VIDIMO DA JE TO DRUGAČIJI KOD
//NEGO STANDARDNI JS - VS KOD NA KOMENTAR STAVLJA {/*I OVO JE KOMENTAR*/}
//ZAPRAVO SVE ŠTO STAVIMO U VITIČASTU ZAGRADU U JSX-U JE JAVASCRIPT KOD, PA
//TAKO I OVAJ KOMENTAR!!!!



export default App;
//radimo defooltni export funkcije App iz ovog filea


//BITNO JE NAPOMENIT DA OVA APP.JS MOŽEMO PISATI I KAO APP.JSX JER TAKO GA I 
//VS CODE RASPOZNAJE I MINJA IKONICU, I TADA SMO SIGURN DA JE TO REACT KOD!!!