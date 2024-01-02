import "./App.css";
import React from "react";
import { UserFunction, UserChildren, UserClass } from "./user";

const users = [
  {
    name: "Ivan",
    years: 30,
  },
  {
    name: "Marko",
    years: 35,
  },
  {
    name: "Ana",
    years: 25,
  },
];
function App() {
  return (
    <div className="App">
      <h1>React aplikacija</h1>
      <p>Ovo zaista radi</p>
      <UserFunction ime={users[0].name} years={users[0].years} />
      <UserClass ime={users[1].name} years={users[1].years} />
      <UserChildren ime={users[2].name} years={users[2].years}>
        A hobi mi je skijanje.
      </UserChildren>
    </div>
  );
}

export default App;
