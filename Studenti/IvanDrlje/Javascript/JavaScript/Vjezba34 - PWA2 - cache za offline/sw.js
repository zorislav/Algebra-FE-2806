

const cacheName = 'mypwa';
const appShellFiles = [
    'index.html',
    'app.js',
    'icon-192.png',
    'icon-512.png',
    'sw.js',
    'mypwa.json'
];
//ovo gore je različito od prvog dijela PWA, u ovaj niz ćemo spremiti sve 
//datoteke koje želimo da nam se pohrane u cache!!!
//zapravo to su sve datoteke iz našeg foldera


self.addEventListener('install', event => {
    console.log('Service Worker installed');

    const createCache = async ()=> {
       const cache = await caches.open(cacheName);//vraća promise
       console.log('Service Worker Caching All');
       await cache.addAll(appShellFiles);//opet vraća promise
       //tek tada na objekt cache otvaramo funkciju addAll i kao argument stavljamo
       //naš niz sa datotekama
    }
    //caches je globalni property koji je dostupan na browseru i na njemu otvaramo
    //funkciju open

    event.waitUntil(createCache());
    //na event objekt kojeg smo dobili gore kao parametar primjenjujemo metodu
    //waitUntil i njoj kao argument stavljamo ovu funkciju createCache i pokrećemo
    //je. ZAPRAVO OVAJ WAITUNTILL ZNAČI DA SE NEĆE ZAVRŠITI NAŠ EVENT
    //LISTENER DOK SE NE IZVRŠI NAŠA FUNKCIJA, ZAPRAVO DOK SE NE NAPUNI CACHE!!!

} );




self.addEventListener('fetch', event => {
    console.log(`You fetched ${event.target.url}`);

    const useCache = async()=>{

        const cachedResponse = await caches.match(event.request);//vraća promise
        //ovo nam kaže da u svim cachevima koji postoje tražiti da li ono što
        //želimo dohvatiti s mreže tu postoji
        if(cachedResponse) return cachedResponse;
        //ako smo nešto dobili vraćamo taj podatak iz funkcije


        //AKO SE OVA GORE LINIJA NE OSTVARI NE PREKINE NA RETURN, IDEMO NA 
        //NORMALAN ZAHTJEV PREMA MREŽI
        const response = await fetch(event.request);
        return response;
        //tu vraćamo ono što smo onda dobili iz normalnog requesta

    }

    event.respondWith(useCache());
    //ovdi respondWith zaustavlja standardni dohvat podataka i preusmerava na
    //izvršavanje gornje funkcije, i umjesto standardnog dohvata podataka, mi
    // koristimo tu funkciju da odredimo kako će izgledati naš dohvat podataka

});
