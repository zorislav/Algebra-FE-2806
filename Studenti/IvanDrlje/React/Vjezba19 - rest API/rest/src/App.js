// ZADATAK:
// U ovoj vježbi potrebno je kreirati novu React aplikaciju u kojoj ćemo dohvatiti i prikazati podatke s REST APIja.
// Koristit ćemo NASA-in API koji omogućava dohvat slike dana.
// Kako bismo dohvatili sliku dana, potrebno je pozvati metodu GET na sljedeći URL:
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
// Kao odgovor na ovaj poziv, dobiti ćemo JSON objekt u kojem se nalazi nekoliko bitnih atributa:
// - url: URL slike
// - title: naziv slike
// - explanation: opis slike
// (kako biste vidjeli puni odgovor, potrebno je kopirati URL za dohvat slike dana u web browser i pritisnuti tipku Enter)
// U našoj React aplikaciji, potrebno je prikazati navedene 3 informacije (sliku, naziv i opis slike).
// Napomena: kako bi se neka slika prikazala u React aplikaciji, potrebno je dodati sljedeći JSX odsječak:
// <img src="url_slike" alt="opis_u_slucaju_da_slika_nije_ucitana" />
// Npr: <img src="https://apod.nasa.gov/apod/image/1908/CannonSupernova_English_960.jpg" alt="Supernova Cannon" />


import './App.css';
import {useEffect, useState} from 'react';


const NASA_API_KEY = 'DAY6eoCtva15OXnSFkQ0nrFthwxcnmgzhjV9enHt';
//Ovdi smo spremili u varijablu ključ koji mi je NASA poslala na mail



function App() {

  const [data, setData] = useState(null);
  //Ovo moramo imati stanje da možemo ažutrirati komponentu kad stignu podaci
  //jer komponenta se neće ponovo ažurirati, nego joj triba promnit stanje



  useEffect(() => {
    //  fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`).
    //  then(response => response.json()). 
    //  then(responseData => setData(responseData));
    //  //Standardna fetch/then funkcija za prihvat podataka iz JS-a

    //OVO DOLI JE OPCIJA SA ASYNC/AWAIT
     async function getData(){
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      const responseData =  await response.json();
      setData(responseData);
    }

    getData();

  }, [])
  //UseEffect koji smo importirali iz Reacta ima prvi parametar funkciju,
   //a drugi dependency niz, a ako ga ne stavimo fukncija će biti izvršena
   //svaki put kada bude promijernjeba komponenta, inače ovako samo
   //jedan put, kad je prazan niz stavljen!!!

   //PODATKE ĆEMO DOBITI DVA PUTA AKO NE ISKLJUČIMO USE STRICT OMOTAČ
   //U GLAVNOJ DATOTECI


   if(!data){
    return(
     <div className='App'>
       <p>Loading NASA data...</p>
     </div>
    );
   }//ovo prokazujemo dokjoš nismo primili podatke sa API-a



  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3>{data.title}</h3>
      <img src={data.url} alt={data.title} width={500}/>
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
