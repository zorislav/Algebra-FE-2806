import logo from './logo.svg';
import './App.css';

import Person from "./Person";
import { suma } from "./util";
import { broj1, broj2 } from "./util";

import Osoba from "./Person";
import { suma as zbroj } from "./util";
import * as brojevi from "./util";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <p>{Person.name}</p>
      <p>{suma(5, 3)}</p>
      <p>{suma(broj1, broj2)}</p>
      <p>{Osoba.name}</p>
      <p>{zbroj(5, 3)}</p>
      <p>{suma(brojevi.broj1, brojevi.broj2)}</p>
    </div>
  );
}

export default App;
