// ZADATAK
// Početno stanje aplikacije je završno stanje vježbe 5.12 i nalazi se u mapi "Pocetno stanje".
// 	1. Potrebno je prikazati sve korisnike u stanju (stateu) pomoću liste
// 	2. Ukoliko se u polje korisnici doda još korisnika, oni se moraju automatski prikazati na ekranu, bez mijenjanja kôda
// 	3. Promjena imena preko trake za unos teksta mora raditi na svim korisnicima
// 	4. Radi optimizacije renderiranja kôda svaki element u listi mora imati postavljen unikatan ključ (key)

import React from "react";
//importiramo React iz reacta!
import "./App.css";
import UserFunction from "./user/UserFunction.js";
//importirali smo našu komponentu izrađenu funkcijom,
//iz user foldera
import UserClass from "./user/UserClass.js";
//importirali smo našu komponentu izrađenu klasom,
//iz user foldera
import UserChildren from "./user/UserChildren.js";
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
      { id: "1", name: "Ivan", years: 30 },
      //Radimo prema zadatku unikatan, ključ(key) za optimizaciju kod
      //renderiranja koda - to je ovo id svojstvo!!!
      { id: "2", name: "Marko", years: 25 },
      { id: "3", name: "Ana", years: 25 },
    ],
    childrenText: "A hobi mi je plivanje",
  };
  //RADIMO STATE OBJEKT(MORA SE ZVATI STATE), I ONDA KAO SVOJSTVO STAVLJAMO
  //CILI ONAJ GORE  BIVŠI USERS NIZ OBJEKATA, I MORAMO STAVITI I DRUGO SVOJSTVO
  // JEDAN PROIZVOLJNI STRING, NIJE BITNO NI KAKO SE SVOJSTVO ZOVE!!!

  //ovdi sad definiramo funkciju za event - onClick, ovaj event će mijenjati
  //stanje komponente
  btnClickHandler = () => {
    const newUsers = this.state.users.map((user) => {
      return {
        ...user, //user je destr. prvi objekt - name: 'Ivan', years: 30
        years: user.years + 1,
      };
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

    this.setState({ users: newUsers });
    //mijenjamo svojstvo users u ovaj novi niz newUsers!!!, mijenjamo mu stanje!
  };


  nameChangeHandler = (event,index) => {
    //OVAJ DRUGI PARAMETAR INDEX SMO DOBILI OD DOLI IZ USER FUNCTIONA!!!

    const { users } = this.state;
    //izdvajamo users iz state objekta

    const newUsers = [...users];
    //radimo kopiju spredanog operatora users u newUsers nizu

    // newUsers[0].name = event.target.value;
    newUsers[index].name = event.target.value;
    //UMISTO DA GA POSTAVIMO NA 0, POSTAVIMO GA NA PRAVI INDEX KOJI SE MINJA 
    //SA ELEMENTON U PETLJI - TOP!!!
    //sada  u tom novim kopirano nizu svojstvu name dajemo value upisa u obrazac!!!
    
    this.setState({ users: newUsers });
    //Stvaramo onda novo stanje, sada novu situaciju!!! TAKO MI MIJENJAMO
    // STANJE I POSLJEDIČNO SE NA EKRANU MIJENJA PRIKAZ IMENA KOJEG UPISUJEMO
    //TOP - ZANIMLJIVO!!! Zapravo ubacujemo dorađenu kopiju na mjesto starog
    //stanja putem funkcije za promjenu stanja SETSTATE!!!
  };
  //ovdi sada radimo funkciju koja će se izvršiti kada se desi promjena u
  // onNameChange propretiu dolje u našoj uvezenoj  UserFunction komponenti!!!
  //S OVIM SMO ZAPRAVO VRATILI PODATAK IZ DIJETETA KOD RODITELJA, ZAPRAVO
  // OBRNUTO ŠTA RADI PROPS!!!

  render() {
    const { users, childrenText } = this.state;
    //MORAMO KORISTITI THIS. JER SMO U KLASNO BAZIRANOJ KOMPONENTI!!!
    //destruktuiranje objekta state u users i childrenTextvarijablu,
    //da ih možemo koristiti dolje
    //RENDER FUNKCIJA SE IZVRŠAVA SVAKI PUTA KAD SE KOMPONENTA PONOVO ISCRTA
    // NA EKRANU

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>

        <ul>
          {users.map((user, index) => {
            return (
              <li key={user.id}>
                <UserFunction
                //MI ZAPRAVO ZA SVAKI ELEMENT NIZA POZIVAMO KOMPONENTU
                  ime={user.name}
                  years={user.years}
                  onNameChange={(event) =>this.nameChangeHandler(event, index)}
                  // predajemo funkciju od gore, ali kroz arow dodatnu funkciju
                  // zato jer nam treba event objekt!
                />
              </li>
            );
          })}
        </ul>
        {/* SADA DODAJEMO NAŠU NEUREĐENU LISTU, koristimo destruktuirani 
          users i metodom map prolazimo kroz elemente niza. ONDA VRAĆAMO
          SA JSX KODOMA NAŠE LIST ITEMSE - DOSLOVNO. */}
        {/* ISTO TAKO MORAMO PSOTAVITI NA LI ITEM UNIKATNI KEY ATRIBUT ONAJ
          User id koji smo dodali u objekte! U SAMO LI ITEM UBACUJEMO U
          VITIČASTIM ZAGRADAMA USER. NAME PRISTUPAM SVOJSTVU OBJEKTA!!!
          I TAKO DOBIJEMO NAŠE RENDERIRANE LI ELEMENTE 
          ALI MI ŽELIMO UMISTO ISPISA SVOJSTVA USERS UBACITI NA ISPIS CILU 
          KOMPONENTU USEFUNCION I UBACUJEMO JE GORE TE ONDA NJOJ DODAJEMO
          ATRIBUTE KOJE ĆEMO PRIKAZATI POMOĆU POMOĆNE KOMPONENTE */}
        <hr/>
        <UserFunction
          ime={this.state.users[0].name}
          godine={this.state.users[0].years}
          onNameChange={(event) => this.nameChangeHandler(event, 0)}
        />
        {/* OVAKO ZAPRAVO BI TREBALI PRISTUPATI STATE OBJEKTU BEZ DESTRUKTUIRANJA!!! */}
        {/* OVI ATRIBUTI (IME, GODINE)SE PRENOSE I NA CHILD KOMPONENTE!!!
          PAZIMO DA MORAJU BITI ISTOG IMENA KAO TAMO U FUNKCIJI, DI SU PARAMETRI!! */}

        <UserClass name={users[1].name} years={users[1].years} />

        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
        {/* HARDKODIRANI TEKST IZMEĐU USERCHILDREN MINJAMO SA IZRAZOM GORE
          THIS.STATE.childrenText - IZ STATE OBJEKTA SVOJSTVO!!! */}

        <button onClick={this.btnClickHandler}>Promjena godina</button>
        {/* radimo onClick attribut, zapravo kao eventlistener i upisujemo u zagrade
          funkciju koju sm gore napravili, OPET NAM TREBA THIS. JER SMO
          U KOMPONENTI KREIRANOJ U OBLKU KLASE!!! */}
      </div>
    );
  }
}
//  NAPRAVILI SMO GLAVNU KOMPONENTU U OBLIKU KLASE!!!

export default App;
