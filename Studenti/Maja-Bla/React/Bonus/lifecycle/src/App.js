import React, {useEffect, useState} from 'react';
import './App.css';

class ClassKomponenta extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
    };

  }

  getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
    .then((resoponse) => response.json())
    .then((responseData) => console.log(responseData));
  };

  UNSAFE_componentWillMount (){
    console.log('Class Komponenta will mount');
    alert ('Class Komponenta will mount');
  }

  componentDidMount (){
    console.log('Class Komponenta did mount');
    alert ('Class Komponenta did mount');
    //ažuriranje prikaza
    this.getList();
  }

  UNSAFE_componentWillUpdate (){
    console.log('Class Komponenta will update');
  }
  
  componentDidUpdate (){
    console.log('Class Komponenta did update');
  }

  render(){

     const {repos} = this.state;

    return
    <>
    <h2>Class komponenta Lifecycle Metode</h2>
    { repos.map((repo) => 
          (
            <div key={}>
            <strong>{repo.name}</strong>
            </div>
          )
          )}
    </>
  };
}


function FunkcijskaKomponenta (){

  const [repos, setRepos] =useState([]);

  function getList = () => {
    fetch('https://api.github.com/users/facebook/repos')
    .then(response => response.json())
    .then(data => this.setState({repos: data}));

  useEffect (() =>  {
    console.log("Running useEffect...");
  }, []);


  return (
    <>
    <h2>Funkcijska komponenta Lifecycle metode</h2>
    </>
  )
}


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ClassKomponenta />


    </div>
  );
}

export default App;
