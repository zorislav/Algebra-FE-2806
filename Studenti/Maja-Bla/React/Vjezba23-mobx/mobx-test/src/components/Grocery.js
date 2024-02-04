import { groceriesStore } from '../store/groceries-store';

function Grocery ({name}){

  function onClickHandler(){
    groceriesStore.deleteGrocery();

  }

  return(
    <p onClick={() => onClickHandler(name)}>{name}</p>

  );
}

export default Grocery;