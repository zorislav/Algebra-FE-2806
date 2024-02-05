
import {useState} from 'react';
//importiramo usestate hook iz reacta da možemo minjat stanje 

import './App.css';




function Child ({title, onBtnClick}) {
  //TITLE JE PROPERTY OD DOLE KOJE SMO UBACILI, ili NEKI OBJEKT
  //ISTO UBACUJEMO OD DOLJE IZ PARENTA I FUNKCIJU ONBTNCLICK DA JE MOŽEMO
  //PALITI OVDI PRITISKOM NA BOTUN!!!


  let msg = 'Goodbye!';
  //Želimo kada kliknemo na botun dole tu vrijednost vratiti u
  // parent komponentu!!!

  return(
    <>
      <h2>Child: {title}</h2>
      {/* iSTI PROPERTY KOJE SMO DOLI UBACILI U GLAVNOJ KOMPONENTI - TITLE */}
      <button onClick={() => onBtnClick(msg)} >Change</button>
      {/* ubacujemo kao argument ovu gore msg varijablu, koju smo predali 
      dolje kao newMessage parametar ,ali opet mora biti u obliku ovakve
      anonimne funkcije*/}
    </>
  )
}
//definicija nove komponente child




function Parent (){

  const [message, setMessage] = useState('Hello World');
  //opet od useState fukncije vadimo message - koji je parametar string
  //Hello World - početno stanje i funkciju koja će minjat stanje setMessage


  //OVDI ONDA NA KRAJU DEFINIRAM OVU FUKNCIJU KOJA ĆE SE KAO PROPERTY SLATI
  //CHILD KOMPONENTI NA POKRETANJE
  function btnClickHandler(newMessage){
    setMessage(newMessage);
    //ovdi ubacujemo newMessage parametar koji ćemo gore staviti kao msg
    //argument varijablu, i u setMessage joj minjamo stanje šta se i prikaže
    //na ekranu
  }



  return(
    <>
      <h2>Parent: {message}</h2>
      <Child title='Moje dijete' onBtnClick={btnClickHandler}/>
      {/* UBACUJEMO PROPERTY TITLE I PRENOSIMO GA GORE U KOMPONENTU KAO parametar
      I ARGUMENT */}
      {/* ISTO TAKO RADIMO NOVI PROPERTY ONBTNCLICK ZA POKRETANJE FUNKCIJE KOJU 
      ŽELIMO DA SE IZVRŠI KLIKOM NA ONAJ GORE BOTUN IZ CHILD KOMPONENTE */}
    </>
  )
}
//definicija nove komponente Parent u koju uključujemo komponentu Child





function App() {
  //OVA FUNKCIJA VRAĆA OBJEKT KOJI PREDSTAVLJA NAŠE STANJE I VRAĆA FUNKCIJU 
  //KOJOM MOŽEMO TO STANJE PROMJENITI, ZATO RADIMO DESTRUKTUIRANJE iz niza:
  const [counter, setCounter] = useState(0);
  //Za trenutno stanje stavljamo sada nulu(zapravo counter je 0).
 

  //ovo je funkcija koja se pokreće klikon na naš botun
  function buttonClickHandler(){
    console.log(counter);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    setCounter((prethodnoStanje) => prethodnoStanje + 1);
    //OVAKO MORAMO PISATI AKO IMAMO VIŠE PROMJENA STANJA!!!

    //ZATO JER JE OVO ASINHRONO POSTAVLJANJE I STANJE NE REAGIRA ODMAH I NE 
    //MOŽEMO GA KORISTITI KAO DOLJE, NEGO OVAKO KAO GORE PREKO FUNKCIJE!!!

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    //OVO VRIDI SAMO ZA PRVU PROMJENU, POSLIJE NE REAGIRA JER NE 
    //MINJAMO STANJE

    //ovo je ona funkcija od gore kojoj smo prominili stanje i koristimo 
    //counter i dodajemo mu 1

  }


  return (
    <div className="App">

      <p>Brojač: {counter}</p>
      {/* ispisujemo sadržaj našeg countera */}
      <button onClick={buttonClickHandler}>Uvećaj brojač</button>
      {/* za onClick property za klik event ubacujemo u zagrade našu funkciju
       koju ćemo na klik pokrenuti */}
       <Parent/>
       {/* Prikazujemo komponentu Parent u kojoj je dijete Child */}
      
    </div>
  );
}

export default App;
