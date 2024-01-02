import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './user';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      users: [
        { name: 'Ivan', years: 30 },
        { name: 'Marko', years: 25 },
        { name: 'Ana', years: 25 }
      ],
      childrenText: "A hobi mi je plivanje"
    };

  }

  btnClickHandler = (event) => {
    console.log(event);
    const newUsers = this.state.users.map((user) => {
      return {...user, years: user.years + 1}
    });
    this.setState({users: newUsers});
  }

  nameChangeHandler = (event) => {

    const { users } = this.state;
    const newUsers = [...users];
    newUsers[0].name = event.target.value;
    this.setState({users: newUsers});

  }
  
  render(){

    const { users, childrenText } = this.state;

    return (
      <div className="App">
        <h1>React aplikacija</h1>
        <p>Ovo zaista radi</p>
        <UserFunction ime={this.state.users[0].name} years={this.state.users[0].years} onNameChange={this.nameChangeHandler}/>
        <UserClass name={users[1].name} years={users[1].years} />
        <UserChildren name={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
        <button onClick={this.btnClickHandler}>Promjena godina</button>
      </div>
    );
  }

}

export default App;