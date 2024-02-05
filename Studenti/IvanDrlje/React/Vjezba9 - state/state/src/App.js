// ZADATAK
// Početno stanje aplikacije je završno stanje aplikacije iz vježbe 5.8 i nalazi se u mapi "Pocetno stanje".
// 	1. U vježbi je potrebno definirati polje korisnici iz prethodne vježbe unutar stanja (statea) komponente App
// 	2. Unutar stanja (statea) komponente App pored polja korisnici potrebno je definirati proizvoljnu tekstualnu varijablu
// 	3. Prikazati na ekranu vrijednosti iz stanja (statea), a proizvoljnu vrijednost prikazati preko children propsa.

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


  render (){
    const {users, childrenText} = this.state;
    //destruktuiranje objekta state u users i childrenTextvarijablu, 
    //da ih možemo koristiti dolje



    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} godine={this.state.users[0].years}/>
        {/* OVAKO ZAPRAVO BI TREBALI PRISTUPATI STATE OBJEKTU BEZ DESTRUKTUIRANJA!!! */}
        

        <UserClass name={users[1].name} years={users[1].years}/>
      
        
        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
        {/* HARDKODIRANI TEKST IZMEĐU USERCHILDREN MINJAMO SA IZRAZOM GORE
        THIS.STATE.childrenText - IZ STATE OBJEKTA SVOJSTVO!!! */}
       

      </div>
    );

  }
}
//  NAPRAVILI SMO GLAVNU KOMPONENTU U OBLIKU KLASE!!!



export default App;
