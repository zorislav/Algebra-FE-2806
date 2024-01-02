const cacheName = "mypwa";
const appShellFiles = [
  "index.html",
  "app.js",
  "icon-192.png",
  "icon-512.png",
  "sw.js",
  "mypwa.json",
];

// Installing Service Worker
self.addEventListener("install", (event) => {
  // self = window, window proxy
  console.log("[Service Worker] Install");

  const createCache = async () => {
    const cache = await caches.open(cacheName);
    console.log("Service Worker Caching All");
    await cache.addAll(appShellFiles);
  };

  event.waitUntil(createCache());
});

// Fetching content using Service Worker
self.addEventListener("fetch", (event) => {
  console.log("You fetched ${event.target.url}");

  const useChche = async () => {

    const cachedResponse = await caches.match(event.request);
    if(cachedResponse) return cachedResponse;

    const response = await fetch(event.request);
    return response;


  }
  event.respondWith(useCache();)

});
