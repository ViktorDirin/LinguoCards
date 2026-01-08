const CACHE_NAME = 'linguocards-v1.3.6';
const ASSETS = [
    './',
    './index.html',
    './css/styles.css',
    './js/app.js',
    './assets/icon.svg',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
