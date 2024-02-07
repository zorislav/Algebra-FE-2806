import { Consumer } from "../context/Kontekts";
// Importiramo Consumer radi kontexta
import { useContext } from "react";
//Obu funkciju za kontekst uvozimo iz reacta

import Context from "../context/Kontekts";


function Komponenta4 (){
  

 const context =  useContext(Context);
//Kao parametar stavljamo ovi importirani kontext od gore
//OVO JE ZAPRAVO DRUGI NAČIN KORIŠTENJA KONETKSTA BEZ OVOG DOLI KONZUMERA!!!
const {text, number, reset} = context;
//Vadimo text i number iz contexta destruktuiranjem i dobijamo novu varijablu
const editText = `${text} preko funkcije, poslani broj je ${number}`;
//Tu sada imamo novu varijablu dikoristimo ovi gore text izdvojeni, ap to sve
//možemo prikazat doli, van Consumera



    return(
      <>
        <h2>Komponenta4</h2>
        <Consumer>
          {ctx => <p>{ctx.text} - {ctx.number}</p>}
          {/* Ovi consumer nam daje kao naš kontext, koji smo tamo definirali
          Sada možemo pristupiti onome svojstvu text koje smo definieali
          u našoj glavnoj komponenti u APP.js!!! */}
          {/* A isto ctx je kao objekt koji dobijamo iz Consumera */}
        </Consumer>

          <p>{editText}</p>
          {/* I ovo onda radi istu takorekuć stvar */}
          <button onClick={reset}>Reset</button>

      </>
      );
}

export default Komponenta4;