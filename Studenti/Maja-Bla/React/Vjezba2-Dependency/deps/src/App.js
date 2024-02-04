import randomstring from 'randomstring';
import './App.css';

function App() {

  // const tmp = randomstring.generate();

  return (
    <div className="App">
   <p>Moj randomstring: {randomstring.generate()} </p>
    </div>
  );
}

export default App;
