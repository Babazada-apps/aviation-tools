// Aviation Tools - Service Worker (Optimized for GitHub Pages)
const CACHE_NAME = "aviation-tools-cache-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",

  // App pages
  "./arzu/index.html",
  "./converter/index.html",

  // Icons
  "./icons/icon-192.png",
  "./icons/icon-512.png",

  // Manifest
  "./manifest.webmanifest"
];

// INSTALL
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// ACTIVATE – köhnə cache-ləri sil
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// FETCH – Offline-first (simple, like `arzu`)
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    caches.match(req).then(cached => {
      return cached || fetch(req).then(res => {
        // update cache for future
        caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone()));
        return res;
      }).catch(() => {
        // if navigation and not cached, return cached index
        if (req.destination === 'document') return caches.match('./index.html');
      });
    })
  );


