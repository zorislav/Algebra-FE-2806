import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      users: [
        { id: '1', name: 'Ivan', years: 30 },
        { id: '2', name: 'Marko', years: 25 },
        { id: '3', name: 'Ana', years: 25 }
      ],
      childrenText: "A hobi mi je plivanje"
    };

  }

  btnClickHandler = (event) => {
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years + 1}
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event, index) => {

    const { users } = this.state;
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    this.setState({users: newUsers});

  }
  
  render(){

    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} years={this.state.users[0].years} onNameChange={(event) => this.nameChangeHandler(event, 0)}/>
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
        <hr />
        <ul style={stil}>
          {users.map((user, index) => <li key={user.id}><UserFunction ime={user.name} years={user.years} onNameChange={(event) => this.nameChangeHandler(event, index)}/></li>)}
        </ul>
      </div>
    );
  }

}

export default App;

const stil = {
  listStyleType: 'none'
};
