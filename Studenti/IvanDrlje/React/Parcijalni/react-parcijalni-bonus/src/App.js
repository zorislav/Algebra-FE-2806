
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
//Ovo importiramo da bi mogloi manipulirati stanjem u funkcijskoj komponenti
import { UserForm, GithubUser, GithubRepos } from './components - za nove komponente';
//ovo je sad named import iz onog index.js-a, a za tracking samo treba
//navesti ime foldera - ako ga VS sam ne prepozna
import {GithubApi} from './services';
//sada importiramo naše dvi funkcije preko onog objekta za importiranje
//te ih možemo ovdi koristit
import { RESET,GET_REPOS, getRepos } from './store/redux-store';

function App() {



  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos)
  const dispatch = useDispatch();

  //ovu funkciju povezujemo doli putem atributa na Userform komponenti
  function getData (userName){
    dispatch(getRepos(userName))
   
  }

  function handleResetUser (){
  dispatch({type: RESET})
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


