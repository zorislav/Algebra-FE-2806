
import './App.css';
import {useState} from 'react';
//Ovo importiramo da bi mogloi manipulirati stanjem u funkcijskoj komponenti
import { UserForm, GithubUser, GithubRepos } from './components - za nove komponente';
//ovo je sad named import iz onog index.js-a, a za tracking samo treba
//navesti ime foldera - ako ga VS sam ne prepozna
import {GithubApi} from './services';
//sada importiramo naše dvi funkcije preko onog objekta za importiranje
//te ih možemo ovdi koristit

function App() {


  const [user, setUser] = useState(null);
  //izdvajamo iz niza, stanje koje nazivamo user i funkciju koja minja stanje
  //setUser. u useState(koji smo gore importirali) incijalno stanje
  // postavljamo na null.

  const [repos, setRepos] = useState([]);
  //POSTAVLJAMO STANJE NA PRAZAN NIZ

  //ovu funkciju povezujemo doli putem atributa na Userform komponenti
  function getData (userName){
    //console.log(userName);
    //OVO ĆE U KONZOLI ISPISATI SVE ŠTO UPIŠEMO U OBRASCU!!!

    Promise.all([
      GithubApi.fetchUser(userName), GithubApi.fetchUserRepos(userName)
    ]).then(([user, repos]) => {
      setUser(user);
      setRepos(repos); //POSTAVLJAMO NOVO STANJE
    }).catch(error => alert(error));
    //Ovo je malo drugačiji način pristupa, na ugrađeni objekt Promise
    //stvaljamo metodu all i u njima imamo niz svih promisa i onda kada ih 
    //dobijemo nazad razrješujemo ih sa then opet u nizu, pa sa catch vatamo 
    //grešku
    //OVO NAM MINJA CILU OVU PRIČU OD DOLI PA ĆEMO JE STAVIT U KOMENTAR!!!

    //!!!GithubApi.fetchUser(userName).then(user => setUser(user)); 
    //sada pozivamo onu importiranu funkciju koju smo importirali 
    //priko objekta
    //Opet stavljamo then metodu jer fetchUser vraća promise da ga riješimo
    //i tek onda dobijamo pravi odgovor od API-a, i stavljamo zapravo naše
    //NOVO STANJE U SET USER FUNKCIJU
    //KAKO SAD IMAMO NEŠTO PRESKAČEMO OVAJ DOLI USER FORM I IDEMO NA KLASIČNI
    // RETURN

    //!!!GithubApi.fetchUserRepos(userName).then(repos => console.log(repos));
    //OVO JE DRUGI POZIV DI ZA NAŠEG USERA OČEKUJEMO LISTU NJEGOVIH REPOZITORIJA

  }

  function handleResetUser (){
    setUser(null);
    //stavlja lokalno stanje na ništa - reset botun
    //zapravo vraća nas na poČetak, OPET OVO DI JE IF RETURN OPCIJA

  }


  //ovo radimo za opciju kada nemamo unesenih podataka, da upozorimo 
  //korisnika, provjeravamo jel stanje postoji ako nije izbacujemo neko
  //upozorenje - KONDICIONALNI RENDERING!!!!
  if(!user){
     return(
    <div className="app">
      <UserForm setUser={getData}/>
      {/* OVO NAM JE UVEZENA IMPORTIRANA PRVA KOMPONENTA */}
      {/* Povezali smo smo funkciju getData putem atributa na komponenti
       Userform */}
    </div>
    )
  }
  //OVO SE ZAPRAVO PRIKAZUJE NA POČETNOM ZASLONU


 
  //OVO SE PRIKAZUJE KADA UPIŠEMO NEŠTO I VRATIMO PODATKE SA API-A
  return (
    <div className="app">
      <GithubUser user={user}/>
      {/* SADA UKLJUČUJEMO KOMPONENTU KOJU SMO IMPORTIRALI, onda radIMO
      PROPERTY DA GA MOŽEMO POVEZAT SA KOMPONENTOM DIJETETOM I POSTAVLJAMO
      JE NA TRENUTNI USER OD GORE- STANJE TRENUTNO */}
      <GithubRepos repos={repos}/>
      {/* OVDI JE SADA NOVA KOMPONENTA ZA LISTU REPOZITORIJA KOJU SMO NAPRAVILI
        I PREDAJEMO MU NOVO STANJE OD ONOG DRUGOG ŠTA SMO GA NAPRAVILI*/}
      <div style={styles.buttonContainer}>
        <button onClick={handleResetUser} style={styles.button}>Reset</button>
      </div>
    </div>
  );
}

export default App;


const styles = {
  buttonContainer: {
    textAlign: 'center'
  },
  button:{
    marginTop: 20,
    width: '100%'
  }
};


