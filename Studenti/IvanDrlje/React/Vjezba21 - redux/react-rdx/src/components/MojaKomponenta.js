
import { UseSelector, useSelector } from "react-redux";


function MojaKomponenta (){

    const brojac =  useSelector(skl => skl.counter)

    return(
        <>
            <h2>ovo je moja komponenta</h2>
            <p>I moja komponenta koristi redux store: {brojac}</p>
        </>
    )
}

export default MojaKomponenta;