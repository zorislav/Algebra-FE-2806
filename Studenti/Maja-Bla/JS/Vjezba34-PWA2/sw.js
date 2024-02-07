const cacheName = "mypwa";
const appShellFiles = [
  'index.html',
  'app.js',
  'icon-192.png'
];



self.addEventListener('install', event =>{

  console.log('Service Worker installed');

  const createCache = async () => {
    const cache = await caches.open(cacheName);

    console.log('[Service Worker] Caching all');
    await cache.addAll(appShellFiles);
  }


  event.waitUntil(createCache());

});

self.addEventListener('fetch', event => {

  console.log('You fetched ${event.target.url}');

  const useCache = async  () => {

    const cachedResponse = await caches.match(event.request);

    console.log(`[Service Worker] Fetching resources ${event.request.url} `);
    if (cachedResponse) return cachedResponse;

    const response = await fetch(event.request);
    return response;

  }

  
  event.respondWith(useCache());


});