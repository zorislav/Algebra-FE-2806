
//u Servise workersu definiramo neke evente koji se dese na događaje

self.addEventListener('install', event => {
    console.log('Service Worker installed');
} );
//SELF je globalni objekt u Service Workersu!!!
//listener će se pokrenuti kada se app instalira

self.addEventListener('fetch', event => {
    console.log(`You fetched ${event.target.url}`);
});
//Ovaj fetch event se pokreće kada dokument dohvaća podatke iz vani


//S OVA DVA LISTENERA SMO DEFINIRALI NAJJEDNOSTAVNIJI SERVICE WORKER!!!