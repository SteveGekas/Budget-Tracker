const CACHE_NAME = cache-v1;
const DATA_CACHE_NAME = data-cache-v1;

const FILES_TO_CACHE = [
    '/',
    '/db.js',
    '/index.html',
    '/index.js',
    '/db.js',
    '/styles.css',
    '/manifest.json',
    '/icons/icon-192x192.png',
    '/icons/icon-192x192.png'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(DATA_CACHE_NAME).then((cache) => cache.add('/api/transaction'))
    );

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    );

    self.skipWaiting
});