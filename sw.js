self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("aviation-cache").then(cache => {
      return cache.addAll([
        "/aviation-tools/",
        "/aviation-tools/index.html",
        "/aviation-tools/kulek/index.html",
        "/aviation-tools/converter/index.html",
        "/aviation-tools/icons/icon-192.png",
        "/aviation-tools/icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
