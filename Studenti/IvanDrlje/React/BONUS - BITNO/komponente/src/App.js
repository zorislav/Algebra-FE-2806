
import './App.css';
import {useState} from 'react';
//importiramo našu hook funkciju za promjenu stanja u funkcijskoj datoteci
import React from 'react';
//importiramo React da bismo mogli definirali koju klasu nasljeđuje naša
//klasom definirana komponenta




//OVO JE POMOĆNA KLASS KOMPONENTA
class ClassKomponenta extends React.Component {

  //radimo stanje pomoćne klass komponente, kao state objekt
  state = {
    classStanje: 'Class pocetno stanje'
  };

  //može imati ili NEMORA ovu konstruktor funkciju
  constructor (props){
    super(props);
    // poziva se konstruktor klasa koju nasljeđuje naša klasa
  }




  //Radimo funkciju za event klika na botun
  btnClickHandler(){
    this.setState({classStanje: 'Class novo stanje'});
    //Pozivamo funkciju koju smo dobili gore za promjenu stanja, i mijenjamo
    // ga u novi string, promjenom classStanje propertija u state objektu 
    //gore!!!!!
  }


  // btnClickHandler = () => {
  //   this.setState({classStanje: 'Class novo stanje'});
  // }
  //OVO BI BILA OPCIJA KADA DOLE NEBI TREBALI KORISTI BIND METODU!!!!




  render(){

    //const {classStanje} = this.state;
    // mogli smo i ovako napraviti pa onda dolje samo staviti classStanje 
    //umjesto this.state.classStanje


    //U KLASNOJ KOMPONENTI OBJEKT PROPS NE DOBIJAMO PREKO AGUMENTA NEGO PREKO 
    //UGRAĐENOG OBJEKTA KOJEM PRISTUPAMO SA THIS.PROPS :
    const {ime, starost, grad, onAppSt} = this.props;
    //Destruktuiramo objekt this.props do svojstava ime, starost, i grad
    //koje smo dodali dolje u glavnoj komponenti kao properti sa vrijednosti!!!


    return(
    <div style={classStyle}>
      {/* Postavljamo style atribut na objekt klasne komponente dolje! */}

      {this.state.classStanje}
        {/* Prikazujemo početno stanje klasne komp. na ekranu */}

      <h2>Class Komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      {/* Sad oćemo sve iste propertie što imamo i u funkcijskoj komponenti
      prikazati i u klasnoj!!! */}

      <button onClick={this.btnClickHandler.bind(this)}>Promjeni lokalno stanje</button>
      {/* Uvodimo botun za promjenu lokalnog stanja u ovoj komponenti, te radimo
       atribut onClick u koji upisujemo ime funkcije koja će se izvršiti kada
       kliknemo na botun! */}
       {/* DA BI OVAJ BOTUN RADIA MORAMO EVENT FUNKCIJU POVEZATI SA INSTANCOM
       KLASE TE RADIMO METODU FUNKCIJE BIND DA BI JE POVEZALI SA THIS, INSTANCOM
       OVE KOMPONENTE, ILI GORE FUNKCIJU MORAMO DEFINIRATI KAO ARROW FUNKCIJU
       DA THIS ODE NA GLAVNU INSTANCU I ONDA BI RADILO!!! */}
       
       <button onClick={() => onAppSt('App novo stanje iz klasne komponente')}>Promijeni App stanje</button>
       {/* SADA RADIMO BOTUN PRITISKOM NA KOJI ŽELIMO PROMINIT STANJE U PARENT
       KOMPONENTI I DA PODATAK KOJI MI JE DEFINIRAN U KOMPONENTI DJETETU VRATIMO
        U KOMPONENTU RODITELJA - DRUGI SMJER!!! PUTEM this.PROPSA PRIMAMO
        TU FUNKCIJU/METODU I UPISUJEMO JE ZA NAŠU ONCLICK FUNKCIJU - ZANIMLJIVO!!! */}
        {/* DODAJEMO U OBLIKU ARROW FUNKCIJE ANONIMNE DA BI DOBILI MOGUĆNOST 
        stavljanja KAO ARGUMENTA stringa novog stanja!!! */}
    </div>
    );
  }
}






//OVO JE POMOĆNA FUNKCIJSKA KOMPONENTA
function FunkcijskaKoponenta (props){
  //Kao parametar dobijem objekt koji se zove props i s njim ću prebacivati 
  //podatke iz propertia koje sam dopisao doli u glavnoj komponenti.
  //Props objekt sadrži sve propertije koje imamo na našoj pomoćnoj
  //funkcijskoj komponenti, pa im možemo lako pristupiti!!!!



  //radimo stanje pomoćne funkcijske komponente
  const [fnStanje, setFnStanje] = useState('Fn Pocetno stanje');
  //Sa setFnState ćemo posli minjat to stanje


  //const {ime, starost, grad} = props;
  //Možemo ali i ne moramo napraviti ovakvo destruktuiranje objekta props 
  //pa dolje u kodu pisati samo ime, umjesto props.ime
  //ILI OVO MOŽEMO NAPRAVITI I GORE U DEFINICIJI FUNKCIJE DI PRIMAMO NAŠE 
  //ARGUMENTE I NAŠ OBJEKT PROPS, MOŽEMO GA ODMAH DESTRUKTUIRAT NA LICU
  //MISTA GORE AKO ŽELIMO, ALI I NE MORAMO!!!!!!!!!!!!!!!!!!


  //Radimo funkciju za event klika na botun
  function btnClickHandler(){
    //objekt event nam je uvik na raspolaganju, koristili ga ili ne!!!

    setFnStanje('Fn novo stanje');
    //Pozivamo funkciju koju smo dobili gore za promjenu stanja, i mijenjamo
    // ga u novi string!!!

  }


  //Definirali smo novu varijablu koja će nam trebati postati novo stanje u 
  //glavnoj komponenti!!!
  let novoAppStanje = 'App novo stanje iz funkcijske komponente';



  return(
    <div style={fnStyle}>
      {/* Postavljamo style atribut na objekt funkcijske komponente dolje! */}
      {fnStanje}
      {/* Prikazujemo početno stanje funkcijske komp. na ekranu */}
      {/* <h2>{props.children} Funkcijska komponenta</h2>
      Pristupili smo children propertiu, ili onome šta piše između ELEMENATA
      doli u glavnoj komponenti  */}

      <p>Ime: {props.ime}</p>
      {/* I PREKO OBJEKTA PROPS PRISTUPILI SMO RODITELJ KOMPONENTI I PREUZELI
      PROPERTY IME KOJE SMO TAMO DEFINIRALI - TOP!!! */}

      <p>Starost: {props.starost}</p>
      <p>Grad: {props.grad}</p>
      {/* U OVA 3 PARAGRAFA GORE ŽELIMO PRIKAZATI PODATKE KOJE ĆEMO DOBITI IZ 
      KOMPONENTE RODITELJA!!! */}

      <button onClick={btnClickHandler}>Promjeni lokalno stanje</button>
      {/* Uvodimo botun za promjenu lokalnog stanja u ovoj komponenti, te radimo
       atribut onClick u koji upisujemo ime funkcije koja će se izvršiti kada
       kliknemo na botun! */}

       <button onClick={() => props.onAppSt(novoAppStanje)}>Promijeni App stanje</button>
       {/* SADA RADIMO BOTUN PRITISKOM NA KOJI ŽELIMO PROMINIT STANJE U PARENT
       KOMPONENTI I DA PODATAK KOJI MI JE DEFINIRAN U KOMPONENTI DJETETU VRATIMO
        U KOMPONENTU RODITELJA - DRUGI SMJER!!! PUTEM PROPSA PRIMAMO TU FUNKCIJU/
        METODU I UPISUJEMO JE ZA NAŠU ONCLICK FUNKCIJU - ZANIMLJIVO!!! */}
        {/* DODAJEMO U OBLIKU ARROW FUNKCIJE ANONIMNE DA BI DOBILI MOGUĆNOST 
        stavljanja KAO ARGUMENTA NAŠE GORE NOVE VARIJABLE KOJU ŽELIMO
        KAO NOVO STANJE U GLAVNOJ KOMPONENTI!!! */}
        
    </div>
  );
}






//OVO JE GLAVNA KOMPONENTA
function App() {

  // SADA ĆEMO U NAŠOJ GLAVNOJ KOMPONENTI KORISTITI NAŠU HOOK FUNKCIJU ZA
  // PROMJENU STANJA
  const [appStanje, setAppStanje] = useState('App pocetno stanje');
  //moramo prvo pozvati naš hook unutar naše komponente, on nam klasično daje
  // ime STANJA ime FUNKCIJE kojom možemo prominit to stanje!
  //ARGUMENT U USESTATE MOŽE BITI ALI I NE MORA, ALI AKO JE TU TO JE NAŠE
  //POČETNO STANJE!!!!!


  //Radimo funkciju za promjenu stanja u glavnoj komponenti
  function appStanjeHandler (novoStanje){
    setAppStanje(novoStanje);
    //parametar novo stanje preuzima argument u pomoćnoj funkciji!!!
  }


  return (
    <div className="App" style={appStyle}>
      {/* Dodajemo style atribut i u njega ćemo staviti ovaj objekt appStyle za
      stilizaciju, zanimljivo!!! */}

      {appStanje} 
      {/* Ovdi smo samo u vitičastim zagradama ispisali naše
      početno stanje da se vidi na ekranu, prije svega!!! */}
      <h1>App komponenta</h1>

      <FunkcijskaKoponenta ime='Ivica' starost={25} grad='Osijek' onAppSt={appStanjeHandler}>
      Dječja
      </FunkcijskaKoponenta>
      {/* Uključujemo našu pomoćnu funkcijsku komponentu od gore i vidimo
      da ona ima svoju stilizaciju na ekranu!!! */}
      {/* Posli toga joj stavljamo property ime, zapravo s njim ćemo prebaciti
      podatke u našu dijete funkcijsku komponentu, pomoću props objekta, kao 
      njegov property, kojeg ćemo dobiti u dijete komponenti! Onda dodajemo isto 
      tako i atribut starost i grad, sve isto*/}
      {/* AKO ŽELIMO NEŠTO NAPISATI I KORISTITI IGRAĐENI CHILDREN PROPERTY, Onda
      MORAMO NAPRAVITI OTVARAJUĆU I ZATVARAJUĆI ELEMENT I SVE ŠTA PIŠEMO
      IZMEĐU ELEMENATA IDE U CHILDREN PROPERTY!!! */}
      {/* NAŠ NOVI ATRIBUT ONAPPST ŠALJE FUNKCIJU IZ GLAVNE KOMPONENTE
      APPSTANJEHANDLER kojom ĆEMO MINJAT STANJE GLAVNE KOMPONENTE ALI 
      KLIKOM U POMOĆNOJ KOMPONENTI */}

      <ClassKomponenta ime='Marica'  starost={33} grad='Pula' onAppSt={appStanjeHandler}/>
      {/* Uključujemo našu pomoćnu klasnu komponentu od gore i vidimo
      da ona ima svoju stilizaciju na ekranu!!! */}
      {/* Sada i u klasnu komponentu želimo dodavati atribute i njihove 
      vrijednosti */}
    </div>
  );
}

export default App;



//Radimo objekt za primjenu stilzacije css na naš div u glavnoj komponenti
const appStyle = {
  backgroundColor: 'lightgray',
  border: '1px solid black',
  padding: 10 //ako immao fiksnu veličinu u px možemo napisati i samo broj 10
  //piše se u camel case, isto kao i u JavaScriptu
}
//OVO JE BAŠ ZANIMLJIVO A ČAK I JEDNOSTAVNO!!!



//Radimo objekt za primjenu stilzacije css na naš div u sporednoj funkcijskoj
// komponenti
const fnStyle = {
  backgroundColor: 'lightblue',
  border:'1px solid black',
  padding: 10
}


//Radimo objekt za primjenu stilzacije css na naš div u sporednoj klasnoj
// komponenti
const classStyle = {
  backgroundColor: 'lightgreen',
  border:'1px solid black',
  padding: 10
}