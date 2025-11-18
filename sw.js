// Aviation Tools - Service Worker (Optimized for GitHub Pages)
const CACHE_NAME = "aviation-tools-cache-v3";

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
  "/aviation-tools/manifest.webmanifest"
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

// FETCH – Online-first, offline fallback
self.addEventListener("fetch", event => {
  const req = event.request;

  // Yalnız GET cache edilsin
  if (req.method !== "GET") return;

  event.respondWith(
    fetch(req)
      .then(res => {
        // Response-u cache-ə sal
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(req, resClone);
        });
        return res;
      })
      .catch(() => {
        // OFFLINE fallback
        return caches.match(req).then(cached => {
          if (cached) return cached;

          // Əgər HTML istənirsə – ana səhifəyə yönəlt
          if (req.destination === "document") {
            return caches.match("/aviation-tools/index.html");
          }
        });
      })
  );
});
