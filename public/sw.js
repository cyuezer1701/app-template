const CACHE_NAME = 'app-v1';
const PRECACHE = ['/', '/offline.html'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;

  // Navigation: network-first, fallback offline.html
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request).catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // Assets: stale-while-revalidate
  e.respondWith(
    caches.match(request).then((cached) => {
      const fetched = fetch(request).then((resp) => {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(request, clone));
        return resp;
      });
      return cached || fetched;
    })
  );
});
