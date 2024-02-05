
import React from 'react';
//uključujemo React da možemo raditi klasnu komponentu
import { useEffect, useState } from 'react';
//Iportiramo ovu funkciju tj, hook kojoj možemo minjat lifecycle
//funkcijske komponente!!!
import './App.css';


//pomoćna klass komponenta
class ClassKomponenta extends React.Component {

  //definicija lokalnog stanja
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  //FUNKCIJA ZA DOHVAT PODATAKA SA API-A  
  getList = () => {
    fetch('https://api.github.com/users/facebook/repos').then(response => 
    response.json()).then(responseData => this.setState({repos: responseData}));
  }


  //ugrađena lifecycle funkcija
  UNSAFE_componentWillMount(){
    console.log('Class Komponenta will mount');
    alert('Class Komponenta will mount');
  }
  //bitno je da je prvo izašao alert, pa nam se tek onda renderirao DOM!
  //GORE STAVLJAMO UNSAFE JER NAM U KONZOLI IZBACUJE UPOZORENJE DA ĆE SE 
  // METODA BRZO UKINUTI ??!!
//ISTO TAKO MORAMO ISKLJUČITI STRICT MODE OMOTAČ U INDEX.JS


  //ugrađena lifecycle funkcija
  componentDidMount(){
    console.log('Class Komponenta did mount');
    alert('Class Komponenta did mount');
    this.getList();
    //pozivamo funkciju getList od gore za prihvat API
  }
  //Ovo je dobro za ažuriranje prikaza


  //ugrađena lifecycle funkcija
  UNSAFE_componentWillUpdate(){
    console.log('Class Komponenta will update');
  }



  //ugrađena lifecycle funkcija
  componentDidUpdate(){
    console.log('Class Komponenta did update');
  }



//ova metoda doja prethodno stanje i propertije
  shouldComponentUpdate(){
    return false;
  }
  //S obzirom da je metoda dala false, ažuriranja se nisu napravila, tako da se
  //i metode wil i did update nisu izvršile!



  render(){

   const {repos} = this.state

    return(

      <>

        <h2>Class Komponenta Lifecycle metode</h2>
        {repos.map((repo, index) =>
        (
          <div key={index}>
            <strong>{repo.name}</strong> 
          </div>
         
        )
         )}
      
      </>
    );
  }
}




//pomoćna funkcijska komponenta
function FunkcijskaKomponenta(){

  const[repos, setRepos] = useState([]);
  //postavljamo stanje na prazan niz, i destruktuiramo ono šta nam vraća
  //funkcija useState


  //FUNKCIJA ZA DOHVAT PODATAKA SA API-A  
 function getList () {
    fetch('https://api.github.com/users/facebook/repos').then(response => 
    response.json()).then(responseData => setRepos(responseData));
  }



  useEffect(() => {
    console.log('Runnning useEffect...');
    getList();
    //Pozivamo na izvršenje getList funkciju!

  }, []);
  //sada koristimo ovu useefect funkciju koju smo gore importirali iz Reacta
  //OSNOVNA FUNKCIJA REACTA JE PRIKAZIVANJE NEČEGA NA EKRANU I OBNAVLJANJE
  //TOG PRIKAZA KADA SE DESI NEKA PROMJENA PODATAKA, SVE OSTALO SE TRETIRA KAO
  //DODATNA FUNKIONALNOST ILI EFEKT!
  //Prvi argument useEffect je funkcija koja će se izvršiti, a drigi je niz
  //di možemo napisati neki dependency o čemu ovisi fukncija, tj kada se dependenci
  //izvrši ponovo će se izvršiti i ova prvi parametar funkcija.
  //AKO JE DRUGI PARAMETAR PRAZAN NIZ IZVRŠAVA SE FUNKCIJA SAMO JEDNOM KADA SE KOMPONENTA KREIRA
  //I UKLJUČI U DOM, ali kao ga nema izvršit će se svaki put kada dođe do 
  //Neke promjene!!!! BITNO!!!


  return (
    <>
      <h2>Funkcijska Komponenta "Lifecycle" metode</h2>
      {repos.map((repo, index) =>
        (
          <div key={index}>
            <strong>{repo.name}</strong> 
          </div>
         
        )
         )}

         {/* PRIKAZ DOHVAT PODATAKA SA apia */}
    </>
  )
}



//glavna komponenta
function App() {
  return (
    <div className="App">
      <h1>App</h1>
      {/* <ClassKomponenta/> */}
      <FunkcijskaKomponenta/>
    </div>
  );
}

export default App;
