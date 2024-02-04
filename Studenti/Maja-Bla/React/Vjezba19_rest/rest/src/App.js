import { useEffect, useState } from 'react';
import './App.css';

const NASA_API_KEY = 'nyuAe2hIgzHLQSsTwvLn3eAK3waEzlJGmB8tZJUb';

function App() {

  const [data, setData] = useState(null);



  useEffect(() => {

    fetch (`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
    .then(response=>response.json())
    .then(responseData => setData(responseData));

  }, [ ]);


  if(!data) {
    return (

      <div className='App'>
        <p>Loading NASA data...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3> {data.title}</h3>
      <img src={data.url} alt={data.title} width={500} />4
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
