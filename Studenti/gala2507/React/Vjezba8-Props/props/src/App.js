import React from "react";
import "./App.css";
import UserFunction from "./user/UserFunction";

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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserFunction ime={users[0].name} years={users[0].years} />
      </div>
    );
  }
}

export default App;
