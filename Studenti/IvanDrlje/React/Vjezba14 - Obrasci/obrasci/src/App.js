import React from 'react';
import './App.css';





class App extends React.Component {

  //sadržaj input elementa želimo pohraniti u lokalno stanje
  constructor (props){
    super(props);


    this.state = {
      name: ''
    };
  }



 //event handler funkcija
  handleChange = (event) => {
    this.setState({name: event.target.value}) 
    //MINJAMO TRENUTNO STANJE I POSTAVLJAMO GA NA VRIJEDNOST IMPUT ELEMENTA!!! 
  }



  //S o0bzirom da klikom na submit događaj, form ide na njegovu standardnu funkcionalnost
  //tj ide na slanje podataka, i reloda stranicu, ALI MI TO ŽELIMO IZBJEĆI!!!
  //Zato i hvatamo ovaj događaj onSubmit atributom!!!
  handleSubmit = (event) =>{
    event.preventDefault();
    //S OVIM SMO BLOKIRALI STANDARNU FUNKCIONALNOST BROWSERA!!!

    const {name} = this.state;
    //destruktuirali smo objekt i imamo novu varijablu name na raspolaganju
    alert(`Ime: ${name}`);
    this.setState({name: ''});
    //S pozivom na setState zapravo resetiramo stanje na prazan string,
    //ZAPRAVO ČIM OTPUSTIMO ALERT ODMA SE IZBRIŠE SVE IZ OBRASCA!!!
  }


  render(){
    return (
      <div className="App">
        <h1>Obrasci 1</h1>

        <form onSubmit={this.handleSubmit}>
          {/* Osluškujemo onSubmit događaj te tada pozivamo neku funkciju */}
          <label htmlFor="ime">Ime</label>
          {/* htmlFor je isto što i for u htmlu - za vezu sa id-om u inputu */}
          <input id='ime' type='text' value={this.state.name} onChange={this.handleChange}></input>
          {/* Sa ovim imput value lokalno stanje spuštamo u vrijednost imout elementa */}
          {/* To se zove 2 way bibding jer povezujemo u oba smjera!!! */}
          <button>Pošalji</button>
        </form>
     
      </div>
    );
  }
}


export default App;
