const CACHE_NAME = "wtf";
let urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/dashboard.html",
  "/pages/about.html",
  "/pages/saved.html",
  "/css/style.css",
  "/css/materialize.css",
  "js/script.js",
  "js/api.js",
  "js/components.js",
  "js/check-service-worker.js",
  "img/favicon.ico",
  "img/logo-brand-l.png",
  "img/soccer.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons"
];

  self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", function(event) {
  var base_url = "https://api.football-data.org/v2/";
  if (event.request.url.indexOf(base_url) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch (event.request);
      })
    )
  }
});


self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName != CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



