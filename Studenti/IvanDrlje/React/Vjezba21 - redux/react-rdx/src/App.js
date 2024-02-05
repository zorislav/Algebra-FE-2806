
import './App.css';
import { useSelectorseSelector, useDispatch, useSelector } from 'react-redux';
//importiramo ovu funkciju iz react-redux, hook funkcija isto
import { ADD_COUNT } from './store/redux-store';
import { SUBTRACT_COUNT, RESET } from './store/redux-store';
import MojaKomponenta from './components/MojaKomponenta';





function App() {


  const counter = useSelector(state => state.counter);
  //pozivamo useSelektor, koju smo gore importirali, a ona dobija kao 
  //ulazni parametar stanje od redux stora - TO JE ONAJ NAŠ INITIAL
  //STATE !!!

  const dispatch = useDispatch();


  function addOne (){
    dispatch({type: ADD_COUNT, payload: 1})

  }


  function subtractOne (){
    dispatch({type: SUBTRACT_COUNT, payload: 1})
  }



  function reset () {
    dispatch({ type: RESET })
  }



  return (
    <div className="App">
      <h1>React Redux</h1>
      <button onClick={addOne}>+</button>
      <span>{counter}</span>
      <button onClick={subtractOne}>-</button>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <MojaKomponenta></MojaKomponenta>
    </div>
  );
}

export default App;
