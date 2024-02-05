// ZADATAK:
// 1. Napraviti novu React aplikaciju
// 2. Instalirati Apollo, biblioteku za React Graphql
// 3. Napraviti upit prema GraphQL serveru (url servera: https://48p1r2roz4.sse.codesandbox.io/)
// 4. Ispisati listu s rezultatima na ekranu

import './App.css';
import {ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache} from '@apollo/client';
//ovo sve importiramo iz apolo client libraria

const GRAPHQL_API = 'https://countries.trevorblades.com';


const client =  new ApolloClient({
  uri: GRAPHQL_API, //adersa di oćemo poslat API
  cache: new InMemoryCache() // di želi  keširati odgovor
});
//Radimo novi objekt preko funkcije i pohranjujemo ga u varijablu



function ShowCountries (){

  const CTRY_QUERY = gql`
  {
    countries{
      code
      name
      capital
      currency
    }
  }`;
  const {loading, error, data} = useQuery(CTRY_QUERY);
  //odma smo destruktuirali šta vraća ova fuknkcija kakda je pozovemo sa
  //našim parametrom

  if(loading) {
    return <p>Loading data...</p>
  }

  if(error){
    return <p>Error!</p>
  }

  return data.countries.map(country =>
     <li key={country.code}>{country.code} : {country.capital} : {country.currency}</li> )
  //radimo klasičnu map funkciju na onaj niz koji dobijamo
  
}
//OVO SMO MI ZAPRAVO GORI NAPRAVILI TOČNO ONAKAKAV UPIT KAKAV OĆEMO!!!








function App() {
  return (
    <div className="App">
     <ApolloProvider client={client}>
       <h1>GraphQL</h1>
       <h3>Upit serveru:</h3>
       <h3>https://countries.trevorblades.com</h3>
       <ul>
         <ShowCountries/>
       </ul>
     </ApolloProvider>
    </div>
  );
}

export default App;
