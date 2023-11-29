
//--------------------------------------
//closure

function vanjska (){
     var poruka = ' Bog svima';

    function unutarnja(){
        console.log(poruka);
    }
   unutarnja(); //MORAMO OVDJE POZVATI UNUTARNJU FUNKCIJU INAČE SE NEĆE IZVRŠITI
}



vanjska(); //s ovim pozivamo samo vanjsku fukciju, a unutarnja če se izvršiti samo ako je već pozvana u vanjskom bloku funkcije
//unutarnju funkciju ne možemo pozvati iz globalnog scopea!!!!

//-------------------------------------------------------------------------
//ANONIMNA FUKCIJA

const counter = (function (){
      let privateCounter = 0;

    function changeBy(val){
        privateCounter = privateCounter + val;
    }

    return {
        increment(){
            changeBy(1);
        },
        value(){
            return privateCounter;
        }
    };
}) (); //ovo je onda samopozivajuća an. funkcija

counter.increment();//pozvali smo funkciju/metodu increment i povećali vrijednost za + 1!!!

console.log(counter); //ovo nam pokazuje da je varijabla counter neki OBJEKT KOJI IMA SVOJE METODE!!!
console.log(counter.value());//ovdje onda POZIVAMO METODU KOJU SMO NAPRAVILI NA NAŠEM OBJEKTU!!!
console.log(counter.privateCounter);

///NAUČIT OVO!!!
//ovo je bitno radi sigurnosti, znači nama je private conter zabranjena vrijednost do koje ne možemo doći,
//osim ako pozovemo funkciju conter.value()!!!!
//jedi pristup vani su metode preko return vrijednosti, ostalo je sve privatno-zatvoreno!!!


