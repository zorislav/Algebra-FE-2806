

//u ovome if-u provjeravamo da li browser podržava service worker funkcionalnost
if('serviceWorker' in navigator){

    navigator.serviceWorker.register('sw.js').then(()=>{
    console.log('Service Worker installed');
});
//navigator objekt je objekt iz browsera, na njega pokrećemo svojstvo service
//worker i onda metodu register. Kao argument ove metode moramo dati ime naše 
//datoteke gdje smo definirali Service Worker.
//Metoda register vraća PROMISE, i kada on bude uspješno razriješen stavljamo 
//metodu .then i u njoj pokrećemo neku funkciju kao će se odraditi
}



