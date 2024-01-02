// Registering Service Worker
// navigator objekt sadrzi info o browseru
if ('serviceWorker' in navigator) {   // provjerava da li postoji service worker container u browseru, da li browser podržava sw
  navigator.serviceWorker.register('sw.js')
  .then(() => console.log('Service worker registered'));
}