

import React from 'react';
//OBAVEZNO MORAMO IMPORTIRATI REACT IZ REACTA AKO RADIMO KOMPONENTU KOJA
//JE DEFINIRANA KLASOM JER KORISTIMO REACT NAREDBU!!!


class WelcomeClass extends React.Component{

    // constructor(){
    //   super();
    //   //..inicijalizacija  -- ako je imamo, ako je nemamo možemo izostaviti ovu
    //   // konstruktor funkciju!!
    // }
  
    render(){
      //kod koji se upiše ovdje se izvršava kod svakog renderiranja!!!
  
      return <h2>Welcome! Komponenta definirana klasom</h2>;
    }
  };
  //napravili smo novu komponentu definiranu klasom, radimo uz ključnu riječ
  //extends, morali smo importirati React radi ovog React.component, dalje
  //koristimo funkciju render i u njuoj vračamo element komponente!!!

  export default WelcomeClass;
  //exportiramo klasnu komponentu!
