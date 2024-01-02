// ZADATAK
// 1.	Napraviti novu React aplikaciju.
// 	2.	Potrebno je napraviti dvije komponente
// 	3.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
// 	4.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
// 	5.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje

import React from 'react';
import './App.css';


function ConditionalRendering (props){

  const text = props.number === 1 && <h3>Ivan</h3>;
  //ako je props.number = 1 konstantu postavljamo na ovaj gore <h3>
  //s obzirom da smo doli postavili da je u atributu number ovo se ispisuje
  //na ekranu!!!
  //AKO BROJ NIJE 1 OVO SE NEĆE IZVRŠITI I KOD IDE DALJE!!!

  const {number} = props;

  return (
    <>
      <h2>Number?</h2>
      {text}
      {props.number === 2 && <h3>Luka</h3>}
      {/* ovo nije 2 pa se kondicional preskače!!! */}
      {number === 3 && <h3>Marko</h3>}
      {/* ni ovo isto nije istina pa se preskače */}
    </>
  )

}







class App extends React.Component {

//ovde definiramo stanje sa konstruktorom
  constructor(){
    super();
    this.state = {
      number: null
    }
  }


//ovdi sada želimo prominit stanje
//FUNKCIJA SETSTATE UVIK KAO ARGUMENT DOBIJA TRENUTNO STANJE, možemo ga koristiti
//ili ne, ovdi mga koristimo u funkciji dolje!!!
  handleButtonClick(number){
    this.setState((currentState) =>{
      return {
        number: number
      }
      //vraćamo stanje objekta(this.state od gore) kao svojstvo i dajemo mu
      //kao vrijednost parametar number iz funkcije handleButtonClick
    } );

  }


  render(){

    return (
      <div className="App">
        <h1>Hello World</h1>
       <ConditionalRendering number={this.state.number}/>
       {/* <ConditionalRendering number={1}/> OVO JE SITUACIJA BEZ STATE*/}
      <button onClick={() => this.handleButtonClick(1)}>1</button>
      {/* stavljamo botun i postavljamo onClick event te u njemu funkciju 
      i pozivamo this.handleButtonClick sa argumentom 1 */}
      <button onClick={() => this.handleButtonClick(2)}>2</button>  
      <button onClick={() => this.handleButtonClick(3)}>3</button>
      </div>
    )
  }
}

//SADRŽAJ SE MIJENJA BEZ RELODANJA, JER SMO PROMIJENILI STANJE I MINJENJA SE
// SAMO NAŠA KOMPONENTA!!!

export default App;
