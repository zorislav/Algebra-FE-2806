import { useSelector, useDispatch } from 'react-redux';

import { GithubApi } from './services';
import { UserForm, GithubUser, GithubRepos } from './components';
import { RESET, GET_REPOS, getRepos } from "./store/redux-store";

import './App.css';



function App() {

  const user = useSelector(state => state.user);
  const repos = useSelector (state => state.repos);
  const dispatch = useDispatch();

  function getData(userName){
    dispatch(getRepos(userName));

  }


  function handleResetUser(){
    dispatch({type: RESET});
  
  }



  if (!user){
    return (
      <div className="app">
       <UserForm setUser={getData}/>
      </div>
    );
  }



  return (
    <div className="app">
      <GithubUser user={user}/>
      <GithubRepos repos={repos} />
      <div style={styles.buttonContainer}>
       <button style={styles.button} onClick={handleResetUser}>Reset</button>
      </div>
      

    </div>
  );
}

export default App;

const styles = {
  buttonContainer: {
    textAlign:'center'
  },

  button:{
    marginTop: 20,
    width: '100%'
  }

};