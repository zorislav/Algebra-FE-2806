import React from 'react';
//s ovim uvozimo glavni REACT modul, koji smo skinili preko npm-a i možemo ga
//vidit u package.json fileu!!!
import ReactDOM from 'react-dom/client';
//s ovim uvozimo REACT-DOM objekt, koji smo skinili preko npm-a i možemo ga
//vidit u package.json fileu!!!
import './index.css';
//import css filea nekog generalnog stilninga al nije to upće neophodno!!!
import App from './App';
//importiramo funkciju App iz datoteke App.js
import reportWebVitals from './reportWebVitals';
//Webvitals je sustav koji nam omogućava konekciju prema google analitici i 
//mjerenje naše aplikacije, isto ga možemo naći u package.json fileu
//Ali ovo nije neophodno za funkcioniranje našeg app-a

const root = ReactDOM.createRoot(document.getElementById('root'));
//pozivamo na ReactDOM objekt(uključen gore) funkciju .createRoot koja kreira
//KROVNI ELEMENT ZA REACTOV DOM!!! i onda njemu predajemo element unutar naše
//index.html datoteke zapravo cilj gdje želimo postaviti početak Reactovog
//DOM-a - (izabrali smo naš div element sa ID-om root).
//UNUTAR TOG ELEMENTA ĆE BITI UGNJEŽNJENO SVE ONO ŠTO JE ZAPRAVO NAŠA REACT
//APLIKACIJA!!!
//I spremili smo ga u neku konstantu root(ili kako god).

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//Onda na ovaj root od gore pozivamo fukciju render i zapravo nešto prikazujemo 
//unutar našeg DIV elementa. "Omotač" ovog App je React.StrictMode komponenta koja
//nam pomaže detektiranju problema u App-u pružajući dodatna upozorenja
//u razvojnom okruženju. A App je prva stvar koju ćemo prikazati na ekranu!!!
// A ta komponenta je definirana u App.js datoteci OBJAŠNJENJA DALJNJA U TOJ
//DATOTECI U KOMENTARIMA HAHAHA

//Ovaj omotač(komponente) može biti od dvije strane, od strane samog Reacta
//kao što je ovdi, ali možemo ih i mi napisati - A TA KOMPONENTA KOJU SMO MI
//NAPISALI JE OVAJ  <App /> (U DRUGOM FILEU NARAVNO).
//Komponente su stilizirane u zelenoj boji, pa nam i VS code pokušava reći da
//to nije HTML kod. 
//Kao u HTML-u imamo komponente koje moraju imati otvarajući i zatvarajući element
//ali i one koji imaju jedan, samozatvarajući element kao ovaj <App />
//Bez ovoga tj, ove / na kraju neće raditi!!!
//Ta komponenta APP je naša importirana funkcija iz APP.js filea
//U Reactu immao dva načina pisanja komponenti - KAO FUNKCIJA I KAO KLASA!!!
//U minimalističkom načinu pisanja i da izbacimo ovaj omotač Reactstrictmode
//app bi i dalje radio!!!





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//OVO GORE JE OBJAŠNJENJE KAKO KORISTITI WEBVITALS!!!
reportWebVitals();
//OVO JE FUNKCIJA ZA KORIŠTENJE WEBVITALSA!!!
//Ali ovo nije neophodno za funkcioniranje našeg app-a



//ZADATAK

// Potrebno je otvoriti Windows Command Prompt ili Visual Studio Code Terminal te utipkati sljedeće naredbe:
// 1. npx create-react-app moja-prva-aplikacija
// 2. cd moja-prva-aplikacija
// 3. npm start
// 4. Otvoriti internet preglednik na stranici http://localhost:3000
// Potom je potrebno:
// 5. promijeniti favicon aplikacije
// 6. promijeniti naziv aplikacije
// 7. ispisati "Moja prva aplikacija" na web stranici