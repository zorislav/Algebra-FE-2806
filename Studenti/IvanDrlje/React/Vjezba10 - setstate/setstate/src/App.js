// ZADATAK
// Početno stanje aplikacije je završno stanje vježbe 5.9 i nalazi se u mapi "Pocetno stanje".
// 	1. Potrebno je dodati novu komponentu koja u sebi sadrži gumb
// 	2. Pritiskom na gumb potrebno je promijeniti godine korisnika
// 	3. Prikazati promjenu na ekranu
// 	4. Komponenta App smije biti jedina komponenta sa stanjima (statefull), komponenta App mora biti definirana klasom


import React from 'react';
//importiramo React iz reacta!
import './App.css';
import UserFunction from './user/UserFunction.js';
//importirali smo našu komponentu izrađenu funkcijom,
//iz user foldera
import UserClass from './user/UserClass.js';
//importirali smo našu komponentu izrađenu klasom,
//iz user foldera
import UserChildren from './user/UserChildren.js';
//importirali smo našu 2 komponentu izrađenu funkcijom,
//iz user foldera

// import {UserFunction, UserClass, UserChildren} from './user';
//OPCIJA KADA BI SVE OVE GORE IMPORTE KOMPONENTI ZAMINILI SA JEDNIM UVOZOM IZ
//INDEX.JS(KOJI JE U USER FOLDERU)!!!





class App extends React.Component {
  //KONSTRUKTOR FUNKCIJA SE IZVRŠAVA SVAKI PUTA KADA SE OBJEKT INICIJALIZIRA
  // constructor(){
  //   super();
  //   this.state = {
  //     users: [
  //       {name: 'Ivan', years: 30},
  //       {name: 'Marko',years: 25},
  //       {name: 'Ana',years: 25}
  //     ],
  //     childrenText: 'A hobi mi je plivanje'
  //   };
  // }
  //OVO GORE JE OPCIJA ZA DEFINIRANJE STANJA PREKO KONSTRUKTORA
  // A DOLJE JE KLASIČNA BEZ KONSTRUKRORA

  state = {
    users: [
      {
        name: 'Ivan',
        years: 30
      },
      {
        name: 'Marko',
        years: 25
      },
      {
        name: 'Ana',
        years: 25
      }
    ],
    childrenText: 'A hobi mi je plivanje'
  };
  //RADIMO STATE OBJEKT(MORA SE ZVATI STATE), I ONDA KAO SVOJSTVO STAVLJAMO
  //CILI ONAJ GORE  BIVŠI USERS NIZ OBJEKATA, I MORAMO STAVITI I DRUGO SVOJSTVO
  // JEDAN PROIZVOLJNI STRING, NIJE BITNO NI KAKO SE SVOJSTVO ZOVE!!!


  //ovdi sad definiramo funkciju za event - onClick, ovaj event će mijenjati 
  //stanje komponente
  btnClickHandler = () =>{
    const newUsers = this.state.users.map((user) => {
      return {...user//user je destr. prvi objekt - name: 'Ivan', years: 30
      , years: user.years + 1}
    });
    //koristimo map metodu da iz gornjeg state objekta/niza vratimo nešto,
    //vratili smo parametrom user kao svaki objekt u tom nizu i koristili
    //spred... operator za izbacivanje iz niza, zapravo radimo kopiju početnog 
    //niza u novi niz, di tako kopiramo na ovaj način element po element!!! 
    //OVO DALJE YEARS: USER.YEARS + 1 ZAPRAVO ZNAČI DA MINJAMO SAMO YEARS
    //SVOJSTVO I POVEĆAVAMO GA ZA 1, ZA SVAKI POJEDINI ELEMENT, A 
    // OSTALO OSTAJE ISTO!!! 
    // SADA KADA KLIKNEMO DOLI NA BOTUN SVAKI PUT SE POVEĆA YEARS U PRIKAZU NA 
    // EKRANU, MINJA SE STANJE KOMPONENTE!!!


    this.setState({users: newUsers});
    //mijenjamo svojstvo users u ovaj novi niz newUsers!!!, mijenjamo mu stanje!

  }


  render (){
    const {users, childrenText} = this.state;
    //MORAMO KORISTITI THIS. JER SMO U KLASNO BAZIRANOJ KOMPONENTI!!!
    //destruktuiranje objekta state u users i childrenTextvarijablu, 
    //da ih možemo koristiti dolje
    //RENDER FUNKCIJA SE IZVRŠAVA SVAKI PUTA KAD SE KOMPONENTA PONOVO ISCRTA
    // NA EKRANU




    return (
      <div className="App">

          <h1>React aplikacija</h1>
          <p>Ovo zaista radi</p>
          <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years}/>
          {/* OVAKO ZAPRAVO BI TREBALI PRISTUPATI STATE OBJEKTU BEZ DESTRUKTUIRANJA!!! */}
          {/* OVI ATRIBUTI (IME, GODINE)SE PRENOSE I NA CHILD KOMPONENTE!!!
          PAZIMO DA MORAJU BITI ISTOG IMENA KAO TAMO U FUNKCIJI, DI SU PARAMETRI!! */}

          <UserClass name={users[1].name} years={users[1].years}/>
      
        
          <UserChildren name={users[2].name} years={users[2].years}>
            {childrenText}
          </UserChildren>
          {/* HARDKODIRANI TEKST IZMEĐU USERCHILDREN MINJAMO SA IZRAZOM GORE
          THIS.STATE.childrenText - IZ STATE OBJEKTA SVOJSTVO!!! */}
       
          <button onClick = {this.btnClickHandler}>Promjena godina</button>
          {/* radimo onClick attribut, zapravo kao eventlistener i upisujemo u zagrade
          funkciju koju sm gore napravili, OPET NAM TREBA THIS. JER SMO
          U KOMPONENTI KREIRANOJ U OBLKU KLASE!!! */}

      </div>
    );

  }
}
//  NAPRAVILI SMO GLAVNU KOMPONENTU U OBLIKU KLASE!!!



export default App;
