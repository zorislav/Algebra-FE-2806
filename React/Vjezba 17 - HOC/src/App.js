import './App.css';


function Button(props){
  return <button {...props}></button>
}

function withColor(Element){
  return function({color, ...otherProps}){
    return <Element {...otherProps} style={{backgroundColor: color}} />;
  }
}

const ColoredButton = withColor(Button);

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <ColoredButton color='red'>Ja sam crven</ColoredButton>
      <ColoredButton color='yellow'>Ja sam crven</ColoredButton>
    </div>
  );
}

export default App;
