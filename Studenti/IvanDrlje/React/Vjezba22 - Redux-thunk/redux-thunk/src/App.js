// ZADATAK:
// Početna točka ove vježe je završno stanje iz vježbe 5.19 i nalazi se u direktoriju Pocetno stanje.
// Za ovu vježbu preuredit ćemo postojeću aplikaciju tako da koristi redux biblioteku.

// Potrebno je:
// - instalirati redux biblioteke: npm install --save redux react-redux redux-thunk
// - kreirati akciju za dohvat informacija s NASA APIja
// - kreirati reducer koji reagira na akciju
// - komponenti App spojiti na redux stanje preko "connect" ili "useSelector" i "useDispatch" hookse


import './App.css';
import {useEffect, } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getNasaData } from './store/redux-store';




function App() {

  const nasaData = useSelector(state => state.nasaData)
  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(getNasaData())

  }, [dispatch]);

  if(!nasaData.title){
    return(
   <div className='App'>
       <p>Loading NASA data...</p>
   </div>
    )
  }
 


  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500}/>
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default App;
