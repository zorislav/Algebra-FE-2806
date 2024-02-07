import Komponenta2 from "./Komponenta2";
//importirali smo Komponentu 2 da je možemo prikazati u komponenti1

function Komponenta1 (){

    return(
        <>
            <h2>Komponenta1</h2>
            <Komponenta2/>
            {/* Prikazujemo komponentu 2 u komponenti 1 */}
        </>
    );
}

export default Komponenta1;