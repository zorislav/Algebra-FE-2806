import React from "react";
import "./App.css";
import { User, NewUser } from "./user";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [
        { id: "1", name: "Ivan", years: 30 },
        { id: "2", name: "Marko", years: 25 },
        { id: "3", name: "Ana", years: 25 },
      ],
      childrenText: "A hobi mi je plivanje",
    };
  }

  btnClickHandler = (event) => {
    const newUsers = this.state.users.map((user) => {
      return { ...user, years: user.years + 1 };
    });
    this.setState({ users: newUsers });
  };

  nameChangeHandler = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };

  addUserHandler = ({ name, age }) => {
    const { users } = this.state;
    const newUser = {
      id: `${name}_${new Date().getTime()}`,
      name: name,
      years: age,
    };
    const newUsers = [...users, newUser];
    this.setState({ users: newUsers });
  };

  deleteUserHandler = (index) => {
    console.log(index);
    const { users } = this.state;
    const newUsers = [...users];
    newUsers.splice(index, 1);
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        <hr />
        <ul style={stil}>
          {users.map((user, index) => (
            <li key={user.id}>
              <User
                ime={user.name}
                years={user.years}
                onNameChange={(event) => this.nameChangeHandler(event, index)}
                onDeleteUser={() => this.deleteUserHandler(index)}
              />
            </li>
          ))}
        </ul>
        <hr />
        <NewUser onAddUser={this.addUserHandler} />
      </div>
    );
  }
}

export default App;

const stil = {
  listStyleType: "none",
};
