const CACHE_NAME = "wtf";
let urlsToCache = [
  "/",
  "/nav.html",
  "/index.html",
  "/team.html",
  "/pages/dashboard.html",
  "/pages/saved.html",
  "/pages/about.html",
  "/css/style.css",
  "/css/materialize.min.css",
  "js/script.js",
  "js/nav.js",
  "js/api.js",
  "js/daftarTeams.js",
  "js/savedTeams.js",
  "js/detailTeam.js",
  "js/materialize.min.js",
  "js/idb.js",
  "js/my-db.js",
  "img/favicon.ico",
  "/img/logo-512x512.png",
  "img/logo-brand-l.png",
  "img/soccer.png",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "/manifest.json"
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
        caches.match(event.request, { ignoreSearch: true }).then(function(response) {
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

self.addEventListener('push', function(event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message dong ';
  }
  var options = {
    body: body,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});


