import React from "react";
import { UserFunction, UserChildren, UserClass } from "./user";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
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
      ],
      childrenText: "A hobi mi je plivanje",
    };
  }

  // state = {
  //   users: [
  //     {
  //       name: "Ivan",
  //       years: 30,
  //     },
  //     {
  //       name: "Marko",
  //       years: 35,
  //     },
  //     {
  //       name: "Ana",
  //       years: 25,
  //     },
  //   ],
  //   childrenText: "A hobi mi je plivanje",
  // };

  render() {
    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <UserFunction
          name={this.state.users[0].name}
          years={this.state.users[0].years}
        />
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {childrenText}
        </UserChildren>
      </div>
    );
  }
}

export default App;
