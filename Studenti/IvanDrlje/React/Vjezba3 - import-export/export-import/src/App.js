import './App.css';
//ovo je import css filea

import Person from './Person.js';
//ovo je defolt import

import {suma, broj1, broj2} from './util.js';
//ovo je named import

import Osoba from './Person.js';
//Ovde radimo primjer kako minjamo ime na importu (Person u osoba), jer imamo
//samo jedan defolt import i program ne može pogriješiti.

import{ suma as zbroj} from './util.js';
//ovde radimo primjer iz named iporta kako možemo prominit u drugo ime,
//suma je sada zbroj u  ovom fileu

import * as brojevi from './util.js';
//ovdje radimo primjer named importa kad sve exporte iz util.js importiramo
//i stavljamo u jedan objekt(brojevi), a pristupamo svakom importu kao
//svojstvu objekta brojevi!!!



function App() {
  return (
    <div className="App">
        <p>{Person.name}</p>
        {/* pristupamo i printamo na siteu svojstvo uvezenog objekta Person */}
        <p>{suma(5, 3)}</p>
        {/* pozvali smo uvezenu funkciju suma i pozvali je sa argumentima 5 i 3
        te će se u pregledniku ispisati 8!!! */}
        <p>{suma(broj1, broj2)}</p>
        {/* opet zovemo importiranu funkciju suma, al ovaj put sa argumentima koji
        su isto uvezeni broj1 i broj2 - LIPO!!! */}
        <p>{Osoba.name}</p>
        {/* importirali smo onaj isti objekt pod drugim imenom i sada pristupamo
        svojstvu i opet dobijemo Ivica u pregledniku - LIPO (Person = Osoba) */}
        <p>{zbroj(5,3)}</p>
        {/* pozvali smo uvezenu funkciju suma kojoj smo  prominili ime u zbroj i
        pozvali je sa argumentima 5 i 3, opet radi isto */}
        <p>{suma(brojevi.broj1, brojevi.broj2)}</p>
        {/* ovdi opet zovemo funkciju suma ali sada kao argumente stavljamo brojeve
        koje smo uvezli kao jedan objekt i onda im pristipamo kao svojstva objekta
        zanimljivo!!! */}
    </div>
  );
}

export default App;
