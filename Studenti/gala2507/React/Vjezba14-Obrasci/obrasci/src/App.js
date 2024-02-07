import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    alert(`Ime: ${name}`);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Ime:
            <input
              id="ime"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button>Posalji</button>
        </form>
      </div>
    );
  }
}

export default App;
