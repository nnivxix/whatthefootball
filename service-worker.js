importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox ? console.log(`Workbox berhasil dimuat`) : console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '4' },
    { url: '/nav.html', revision: '3' },
    {url: '/team.html', revision: '3'},
    {url: '/css/style.css', revision: '3'},
    {url: '/css/materialize.min.css', revision: '1'},
    {url: '/js/api.js', revision: '3'},
    {url: '/js/daftarTeams.js', revision: '3'},
    {url: '/js/detailTeam.js', revision: '3'},
    {url: '/js/idb.js', revision: '3'},
    {url: '/js/materialize.min.js', revision: '1'},
    {url: '/js/my-db.js', revision: '3'},
    {url: '/js/nav.js', revision: '3'},
    {url: '/js/savedTeams.js', revision: '4'},
    {url: '/js/script.js', revision: '4'},
    {url: 'img/maskable_icon.png', revision:'1'},
    {url: 'img/404.png', revision:'1'},
    {url: 'img/soccer.png', revision:'1'},
    {url: 'img/favicon.ico', revision:'1'},
    {url: 'img/icon-512.png', revision:'1'},
    {url: 'img/icon-192.png', revision:'1'},
    {url: '/pages/about.html', revision: '1'},
    {url: '/pages/dashboard.html', revision: '1'},
    {url: '/pages/saved.html', revision: '1'},
    {url: 'manifest.json', revision: '4'}
    ],{
      ignoreUrlParametersMatching: [/.*/]
    });




workbox.routing.registerRoute(
    new RegExp("/pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages"
    })
);

workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)



workbox.routing.registerRoute(
  /\.(?:png|jpx|css|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 25,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  })
);

// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);
 
// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);


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


