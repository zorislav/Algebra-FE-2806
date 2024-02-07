
import {createStore} from 'redux';



export const ADD_COUNT = 'ADD_COUNT';
export const SUBTRACT_COUNT = 'SUBTRACT_COUNT';
export const RESET = 'RESET';



//radimo neko naše početno stanje u obliku objekta
const initialState = {
    counter: 0
};



//sada definiramo tu reducer funkciju
const reducer = (state = initialState, action) => {
    //prvi parametar je stanje i postavljamo ga na inicijalno stanje,
    //a drugi parametar action objekt

    //screnarije radimo sa switch
    switch(action.type){
        case ADD_COUNT:
            return {counter: state.counter + action.payload}
        case SUBTRACT_COUNT:
            return {counter: state.counter - action.payload}
        case RESET:
            return {counter: 0}
        default:
            return state; 
             // reducer funkcija mora vraćati neko stanje, da bi radila
    }

    
}



const store = createStore(reducer);
// sada radimo store i iniciramo importiranu createStore funkciju i kao
//argument stavljamo reducer varijablu.


export default store;
//exportiramo store kao defolt export