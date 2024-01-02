import "./App.css";
import React from "react";
import { UserFunction, UserChildren, UserClass } from "./user";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        { name: "Ivan", years: 30 },
        { name: "Marko", years: 35 },
        { name: "Ana", years: 25 },
      ],
      childrenText: "A hobi mi je skijanje",
    };
  }

  btnClickHandler = (event) => {
    console.log(event);
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };
  // state = {
  //   users: [
  //     { name: "Ivan", years: 30 },
  //     { name: "Marko", years: 35 },
  //     { name: "Ana", years: 25 },
  //   ],
  //   childrenText: "A hobi mi je skijanje",
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
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }
}

export default App;
