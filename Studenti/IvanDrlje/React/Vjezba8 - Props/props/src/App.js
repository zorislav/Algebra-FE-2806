// ZADATAK
// U vježbi je potrebno napraviti četiri komponente u četiri odvojene datoteke. Komponenta App i još jedna komponenta moraju biti definirane klasom, a dvije komponente je potrebno definirati funkcijom.
// 2.	Komponenta App mora biti parent komponenta ostalima i mora sadržavati polje "korisnici" koje unutar sebe sadrži tri objekta s imenima i godinama korisnika.
// 3.	Komponenta App mora pozivati ostale komponente i u pozivu preko props-a im treba proslijediti ime i godine korisnika, jednu komponentu je potrebno pozvati s "children" propsima.
// 4.	Komponenta definirana funkcijom treba prikazati ime i godine korisnika.
// 5.	Komponenta definirana klasom treba prikazati ime i godine korisnika.
// 6.	Druga komponenta definirana funkcijom treba prikazati ime i godine korisnika, te treba ispisati proslijeđene children propse.


import React from 'react';
//importiramo React iz reacta!
import './App.css';
import UserFunction from './user/UserFunction.js';
//importirali smo našu komponentu izrađenu funkcijom
import UserClass from './user/UserClass.js';
//importirali smo našu komponentu izrađenu klasom
import UserChildren from './user/UserChildren.js';
//importirali smo našu 2 komponentu izrađenu funkcijom

// import {UserFunction, UserClass, UserChildren} from './user';
//OPCIJA KADA BI SVE OVE GORE IMPORTE KOMPONENTI ZAMINILI SA JEDNIM UVOZOM IZ
//INDEX.JS(KOJI JE U USER FOLDERU)!!!




const users = [
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
];
//napravili smo niz sa 3 objekta



class App extends React.Component {

  render (){
    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={users[0].name} godine={users[0].years}/>
        {/* RADIMO SADA TAJ FAMOZNI NOVI PROPERTY/PROPS IME I GODINE I DODAJEMO
         IM VRIJEDNOSTI IZ NIZA KOJEG SMO GORE NAPRAVILI, MORA BITI ISTO 
         IME DA SE SLAŽU, AKO IME SVOJSTVA U NAŠOJ USERFUNCTION KOMPONENTI */}
         {/* OVO SMO GORE UBACILI NAŠU FUNKCIJSKU IMPORTIRANU DATOTEKU */}

        <UserClass name={users[1].name} years={users[1].years}/>
        {/* OPET KREIRAMO PROPERTYE SA DRUGIM DIJELOM OBJEKTA  */}
          {/* OVO SMO GORE UBACILI NAŠU KLASNU IMPORTIRANU DATOTEKU */}
        
        <UserChildren name={users[2].name} years={users[2].years}>
          I hobi mi je skijanje!
        </UserChildren>
        {/* KADA UBACUJEMO POSEBNI PROPERTY CHILDREN OTVARAMO NAŠOJ KOMPONENTI 
        ZAVRŠNI DIO(KOJI INAČE NE TREBA, OVDI </USERCHILDREN>) I SVE ŠTO SE NALAZI
        UNUTAR IZMEĐU DVI KOMPONENTE IDE U CHILDREN PROPERTY!!! */}

      </div>
    );

  }
}
//  NAPRAVILI SMO GLAVNU KOMPONENTU U OBLIKU KLASE!!!



export default App;
