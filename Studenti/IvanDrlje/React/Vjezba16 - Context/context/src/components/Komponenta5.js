
import React from "react";
import { Consumer } from "../context/Kontekts";
import Context from "../context/Kontekts";


class Komponenta5 extends React.Component {


  static contextType = Context;
  //ovo je static radi nekih instanci u klasama???

  
  
  
  render(){

    const {text, number} = this.context;
    //ovo je neki ugrađeni objekt kontekst, di destruktiramo sadržaj, 2 svojstva
    const editText = `${text} preko funkcije, poslani broj je ${number}`;
    //OVO JE OPET ZA ONU DRUGU OPCIJU

     return(
    <>
      <h2>Komponenta5</h2>
      <Consumer>{ctx => <p>{ctx.text} - {ctx.number}</p>}</Consumer>
      {editText}
      {/* I ovo je opet ona druga verzija ka i u funkcijskim komponentama */}
    </>
    )
 }
}

export default Komponenta5;