import { useContext } from "react";
import { Consumer } from "../context/Kontekst";

import Context from "../context/Kontekst";

function Komponenta4(){

  const context = useContext (Context);

  const { text, number } = context;

  const editText = `${text} preko funkcije, a poslani broj je ${number}`;

  return (
    <>
      <h2>Komponenta4</h2>
      <Consumer>
      {ctx => <p>{ctx.text} - {ctx.number}</p>}
      </Consumer>
      <p>{editText}</p>
      
      </>
  );
}

export default Komponenta4;