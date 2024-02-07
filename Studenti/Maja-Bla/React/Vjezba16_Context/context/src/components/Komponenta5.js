import React from "react";
import { Consumer } from "../context/Kontekst";
import Context from "../context/Kontekst";

class Komponenta5 extends React.Component{

  static contextType = Context;

  render(){

    const { text, number } = this.context;
    const editText = `${text} preko funkcije, a poslani broj je: ${number}`;

    return(
      <>
        <h2>Komponenta5</h2>
        <Consumer>{ctx => <p>Komponenta 5 ispisuje: {ctx.text}</p>}</Consumer>
        <p>{editText}</p>
      </>
    );
  }    
}


export default Komponenta5;