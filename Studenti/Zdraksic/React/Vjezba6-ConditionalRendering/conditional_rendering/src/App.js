import React from "react";
import "./App.css";

function ConditionalRendering(props) {
  const text = props.number === 1 && <h3>Ivan</h3>;

  const { number } = props;
  return (
    <>
      <h2>Number?</h2>
      {text}
      {props.number === 2 && <h3>Luka</h3>}
      {number === 3 && <h3>Marko</h3>}
    </>
  );
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      number: null,
    };
  }

  handleButtonClick(number) {
    this.setState((currState) => {
      return {
        number: number,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <ConditionalRendering number={this.state.number} />
        <button onClick={() => this.handleButtonClick(1)}>1</button>
        <button onClick={() => this.handleButtonClick(2)}>2</button>
        <button onClick={() => this.handleButtonClick(3)}>3</button>
      </div>
    );
  }
}

export default App;
