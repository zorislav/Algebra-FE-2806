import React,  { useState } from 'react';
import './App.css';

class ClassKomponenta extends React.Component {


  constructor(props){
    super(props);

    this.state={
      classStanje:"Class pocetno stanje"
    };
  }
  
  render (){

    const { classStanje } = this.state;
    const {ime, starost, grad} = this.props;

    return (
     <div style={classStyle}>
      {this.state.classStanje}
      <h2>Class komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      
      
    </div>
    );
  }
}


function FunkcijskaKomponenta({ ime, starost, grad, children }){

  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler(){
    setFnStanje("Fn novo stanje");
  }
  
  return (
    <div style={fnStyle}>
      <h2> {children}  komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad} </p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
    </div>
  );
}

function App() {

  const [appStanje, setAppStanje] = useState ("App pocetno stanje");

  return (
    <div className="App" style={appStyle}>
      {appStanje}
      <h1>App komponenta</h1>
      <FunkcijskaKomponenta ime="Ivica" starost={25} grad="Osijek">Funkcijska </FunkcijskaKomponenta>
      <ClassKomponenta ime="Marica" starost={27} grad="Pula"/>
    </div>
  );
}

export default App;

const appStyle = {
  backgroundColor: 'lightgray',
  border: '1px solid black',
  padding: 10

};

const fnStyle = {
  backgroundColor: 'lightblue',
  border: '1px solid black',
  padding: 10
};


const classStyle = {
  backgroundColor: 'lightgreen',
  border: '1px solid black',
  padding: 10
};