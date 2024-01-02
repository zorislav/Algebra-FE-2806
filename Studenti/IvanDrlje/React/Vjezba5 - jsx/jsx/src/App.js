// ZADATAK!
// 1.	Napraviti novu React aplikaciju
// 	2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
// 	3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
// 	4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
// 	5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom

import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Ivan';

  const user = {
    firstname: 'Luka',
    lastName: 'Horvat'
  };

  const userOutput = `${user.firstname} ${user.lastName}`;


  return (
    <div className="App">
     
     <p>Hello World</p>
     <p>Moje ime je: {name}</p>
     <p>Moje ime i prezime je: {user.firstname}, a prezime je: {user.lastName}</p>
     <p>Moje ime i prezime je: {userOutput}</p>

    </div>
  );
}

export default App;


// OPCIJA PISANJA KOMPONENTE KAO FUNKCIJA:
// function Komponenta(){
//   return(
//     //JSX NEKI 
//   );
// }

// export default Komponenta;


//--------------------------------------------------------------
//OPCIJA PISANJA KOMPONENTE KAO KLASA:

// import React from 'react';
// //PRVO  MORAMO IMPORTIRATI REACT IZ FILEA REACT

// class Komponenta extends React.Component {

//   constructor(){
//     super();
//     //....
//   }
//   //ovo je konstruktor funkcija koja može biti u opciji klasnog prikaza komponente
     //ali nije neophodna!!!

//   render(){
//     return(
//       //jsx kod
//     )
//   }
//   //izvršava se samo ono šta je napisano u render funkciji
// } 

// export default Komponenta;

