import { GroceriesList } from "./components/GroceriesList";
import GroceryAdd from "./components/GroceryAdd";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Groceries - Powered by Mobx!</h1>
      <GroceriesList />
      <GroceryAdd />
    </div>
  );
}

export default App;
