
import {useState} from 'react';
import { groceriesStore } from '../store/groceries-store';



function GroceryAdd (){

   const [grocery, setGrocery] = useState('');


   function groceryChangeHandler (event){
    setGrocery(event.target.value);

   }


   function groceryAddHandler (){
    setGrocery('');
    groceriesStore.addGrocery(grocery);
   }
    	

    return(
     <>
        <label>
          <input type='text' value={grocery} onChange={groceryChangeHandler}></input>
        </label>
        <button onClick={groceryAddHandler}>Add</button>
     </>
    );
}

export default GroceryAdd;