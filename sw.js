/* Cache local assets for offline-ish play. Python write-code (Pyodide CDN) is cached opportunistically after first load. */
const CACHE = "printer-v5";
const LOCAL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/schema.js",
  "./js/sql-engine.js",
  "./js/questions-sql.js",
  "./js/questions-sql-v2.js",
  "./js/questions-sql-writes-v4.js",
  "./js/questions-python.js",
  "./js/questions-python-writes-v4.js",
  "./js/lessons-sql.js",
  "./js/lessons-python.js",
  "./js/topics-meta.js",
  "./js/brand.js",
  "./js/quiz.js",
  "./js/python-engine.js",
  "./js/app.js",
  "./icons/logo.svg",
  "./icons/logo-maskable.svg",
  "./icons/wordmark.svg",
  "./vendor/sql-wasm.js",
  "./vendor/sql-wasm.wasm",
  "./fonts/heebo-400.ttf",
  "./fonts/heebo-500.ttf",
  "./fonts/heebo-700.ttf",
  "./fonts/heebo-800.ttf",
  "./fonts/ibm-plex-mono-400.ttf",
  "./fonts/ibm-plex-mono-600.ttf",
  "./icons/favicon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-192-maskable.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(LOCAL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchAndCache = fetch(req)
        .then((res) => {
          try {
            const url = new URL(req.url);
            const sameOrigin = url.origin === self.location.origin;
            const pyodide = url.hostname.includes("jsdelivr.net") && url.pathname.includes("pyodide");
            if (res && res.ok && (sameOrigin || pyodide)) {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
            }
          } catch (_) {}
          return res;
        })
        .catch(() => cached);
      return cached || fetchAndCache;
    })
  );
});
