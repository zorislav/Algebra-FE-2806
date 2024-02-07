
import './App.css';




//KOMPONENTA NAPISANA ARROW FUNKCIJOM
const Button = (props) => {

  return <button {...props}></button>
  //ako imamo propse ovdi ih raščlanimo sa spred operatorom
}





function widthColor (Element) {



  return function ({boja, ...otherProps}) {
    return <Element {...otherProps} style={{backgroundColor: boja}}/>;
  }
}


const ColorredButton = widthColor(Button);






function App() {
  return (
    <div className="App">

      <h1 style={styles.h1stil}>Hello</h1>
      {/* DRUGI NAČIN PRIMJENE STILIZACIJE POMOĆU DONJEG OBJEKTA */}
      
      {/* <h1 style={{color: 'blue', backgroundColor: 'lightgreen'}}>Hello</h1> */}
      {/* OVO JE KAO NEKI INLINE CSS NAČIN PRIMJENE - ZANIMLJIVO */}
      <ColorredButton boja='red'>Bok, ja sam crven</ColorredButton>
      <ColorredButton boja='yellow'>Bok, ja sam žuti</ColorredButton>
      {/* OVO SAD VEĆ RADI AUTOMATIZMOM, KOJI SMO GORE DEFINIRALI!!! */}
      <p style={styles.pstil}>To sam ja</p>
    </div>
  );
}

export default App;


//OBJEKT ZA STILIZACIJU!!!
const styles = {
  h1stil: {
    color: 'blue',
    backgroundColor: 'lightgray'
  },
  pstil: {
    color: 'yellow'
  },
  pstilNovi: {
    backgroundColor: 'green'
  }
};
