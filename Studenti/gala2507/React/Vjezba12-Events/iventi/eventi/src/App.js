import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function buttonClickHandler() {
    setCounter((predhodnoStanje) => predhodnoStanje + 1);
    setCounter((predhodnoStanje) => predhodnoStanje + 1);
    setCounter((predhodnoStanje) => predhodnoStanje + 1);
    setCounter((predhodnoStanje) => predhodnoStanje + 1);
  }
  return (
    <div className="App">
      <p>Brojač: {counter}</p>
      <button onClick={buttonClickHandler}>Uvećaj brojač</button>
    </div>
  );
}

export default App;
