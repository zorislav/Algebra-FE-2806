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
  render() {
    return (
      <div className="App">
        <h1>Hello World!!</h1>
        <ConditionalRendering number={this.state.number} />
      </div>
    );
  }
}
export default App;
