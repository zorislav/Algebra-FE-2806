// ZADATAK
// Početno stanje aplikacije je završno stanje vježbe 5.10 i nalazi se u mapi "Pocetno stanje".
// Potrebno je promijeniti komponentu App - komponenta App mora biti definirana funkcijom.
// Za čuvanje stanja aplikacije potrebno je koristiti useState hook.

import { useState } from 'react';
//IMPORTIRAMO USESTATE(ZA STANJE I HOOK) IZ REACTA, OVO JE NAMED IMPORT!!!
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





//minjamo našu komponentu iz klasne u funkcijsku, vidit razliku u odnosu na 
//zadatak 10:

function App () {

  //SADA UNUTAR KOMPONENTE MOŽEMO KORISTITI USESTATE FUNKCIJU KOJU SMO IMPORTIRALI
  //GORE IZ REACTA, to je naša hook!!!
  //OVA FUNKCIJA VRAĆA OBJEKT KOJI PREDSTAVLJA NAŠE STANJE I VRAĆA FUNKCIJU 
  //KOJOM MOŽEMO TO STANJE PROMJENITI, ZATO RADIMO DESTRUKTUIRANJE iz niza:
  const [users, setUsers]  = useState([
      {name: 'Ivan', years: 30},
      {name: 'Marko', years: 25},
      {name: 'Ana', years: 25}
    ]);
  //za razliku od klasne komponente ovdi kod destruktuiranja možemo sami 
  //definirati kako da nam se zove objekt stanja, ali bi trebali funkciju
  //koja minjenja stanje nazvati set - stanje(gore setUsers)
  //ZA ARGUMENT USESTATE FUNKCIJE STAVLJAMO NAŠE POČETNO STANJE, TO JE OVDI
  // NIZ SA 3 OBJEKTA

  // ZA RAZLIKU OD KLASNE U FUNKCIJSKOJ KOMPONENTI MI MOŽEMO KORISTITI USESTATE 
  //FUNKCIJU KOLIKO NAM GOD PUTA TREBA!!!
  const [childrenText, setChildrenText] = useState('A hobi mi je plivanje');
  //Ovdi smo definirali i drugo lokalno stanje, ovdi smo kao parametar 
  //stavili ovaj string koji je u klasnoj komponenti bio svojstvo!
  //OVU GORE FUNKCIJU I NISMO NI TREBALI IZDVOJITI SETCHILDRENTEXT 
  //AKO JE NE KORISTIMO, A RECIMO OVDI JE NE KORISTIMO I SVE BI RADILO!!!
 


  


  //ovdi sad definiramo funkciju za event - onClick, ovaj event će mijenjati 
  //stanje komponente
   const btnClickHandler = (event) =>{

    console.log(event);
    //u konzoli vidimo event objekt - SynteticBaseEvent, koji ima i svojstvo
    // - target koje nam pokazuje koji je el. trigerirao ovaj event (button)

    const newUsers = users.map((user) => {
       return {...user//user je destr. prvi objekt - name: 'Ivan', years: 30
       , years: user.years + 1};
       //opet isto prolazimo kroz niz i mijenjamo stanje
    });
   //u event listeneru uvik dobijamo event objekt, kao parametar ovdi
 
    setUsers(newUsers);
   //pozivamo funkciju koja mijenja stanje i predajemo joj naš novi objekt
   //newUsers kao argument!!!

    }


    return (
      <div className="App">

          <h1>React aplikacija</h1>
          <p>Ovo zaista radi</p>
          <UserFunction ime={users[0].name} godine={users[0].years}/>
          {/* Za razliku od klasne komponente ovdi samo predajemo users, ne
           treba nam navođenje this i objekta */}
      

          <UserClass name={users[1].name} years={users[1].years}/>
      
        
          <UserChildren name={users[2].name} years={users[2].years}>
            {childrenText}
          </UserChildren>
         
       
          <button onClick = {btnClickHandler}>Promjena godina</button>
          {/* radimo onClick attribut, zapravo kao eventlistener i upisujemo u zagrade
          funkciju koju smo gore napravili, više nam ne treba THIS!!!*/}

      </div>
    );

  }


  //FUNKCIJSKE KMPONENTE SU JEDNOSTAVNIJE, DEFOLT SU I VIŠE SE KORISTE U PRAKSI!!!


export default App;
