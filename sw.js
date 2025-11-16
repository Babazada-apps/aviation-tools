// Aviation Tools - Service Worker
const CACHE_NAME = "aviation-tools-v1";

const FILES_TO_CACHE = [
  "/aviation-tools/",
  "/aviation-tools/index.html",

  // App pages
  "/aviation-tools/arzu/index.html",
  "/aviation-tools/converter/index.html",

  // Icons
  "/aviation-tools/icons/icon-192.png",
  "/aviation-tools/icons/icon-512.png",

  // Manifest
  "/aviation-tools/manifest.webmanifest",

  // Styles / Scripts (əgər varsa)
  "/aviation-tools/sw.js"
];

// Install event
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate event (köhnə cache-ləri silir)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - offline dəstəyi
self.addEventListener("fetch", event => {
  const request = event.request;

  // Yalnız GET sorğularını cache et
  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      return (
        cached ||
        fetch(request)
          .then(response => {
            // Response-u cache-lə
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(request, response.clone());
              return response;
            });
          })
          .catch(() => {
            // Offline fallback
            if (request.destination === "document") {
              return caches.match("/aviation-tools/index.html");
            }
          })
      );
    })
  );
});
