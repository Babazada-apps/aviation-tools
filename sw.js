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
        caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        return res;
      })
      .catch(() => {
        // OFFLINE fallback
        return caches.match(req).then(cached => {
          if (cached) return cached;

          // Əgər HTML istənirsə – ana səhifəyə yönəlt
          if (req.destination === "document") {
            return caches.match("./index.html");
          }
          // Nothing found — return a simple Response or resolve to undefined
          return undefined;
        });
      })
  );


