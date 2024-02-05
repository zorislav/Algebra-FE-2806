import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


function Index() {

  return(
    <>
      <h1>Welcome to Router!</h1>
      <p>Ovo je primjer korištenja React Router-a.</p>
      <p>Sad sam na početnoj stranici.</p>
    </>
  );
}

function Komponenta1() {
  return(
    <>
      <h1>Welcome to Router!</h1>
      <p>Ovo je primjer korištenja React Router-a.</p>
      <p>Sad sam na Komponenti1.</p>
    </>
  );
}

function Komponenta2() {
  return(
    <>
      <h1>Welcome to Router!</h1>
      <p>Ovo je primjer korištenja React Router-a.</p>
      <p>Sad sam na Komponenti2.</p>
    </>
  );
}


function App() {
  return (
    <div className='App'>
      <nav>
        <ul style={{listStyleType: 'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/k1">Komponenta 1</Link>
          </li>
          <li>
            <Link to="/k2">Komponenta 2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/k1" element={<Komponenta1 />} />
        <Route path="/k2" element={<Komponenta2 />} />
      </Routes>
    </div>
  );
}

export default App;
