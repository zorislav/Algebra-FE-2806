// Installing Service Worker
self.addEventListener("install", (event) => {
  // self = window, window proxy
  console.log("[Service Worker] Install");
});

// Fetching content using Service Worker
self.addEventListener("fetch", (event) => {
  console.log("You fetched " + event.url);
});
