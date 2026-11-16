/* printer service worker.
   HTML and sw.js are network-first so updates reach installed PWAs.
   Versioned JS/CSS (?v=) are cache-first. Old caches are dropped on activate,
   and open pages are asked to reload once. */
const APP_VERSION = "8";
const CACHE = "printer-v" + APP_VERSION;
const V = "?v=" + APP_VERSION;

const LOCAL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css" + V,
  "./js/schema.js" + V,
  "./js/sql-engine.js" + V,
  "./js/questions-sql.js" + V,
  "./js/questions-sql-v2.js" + V,
  "./js/questions-sql-writes-v4.js" + V,
  "./js/questions-python.js" + V,
  "./js/questions-python-writes-v4.js" + V,
  "./js/lessons-sql.js" + V,
  "./js/lessons-python.js" + V,
  "./js/lessons-data.js" + V,
  "./js/questions-data.js" + V,
  "./js/topics-meta.js" + V,
  "./js/brand.js" + V,
  "./js/quiz.js" + V,
  "./js/python-engine.js" + V,
  "./js/app.js" + V,
  "./icons/logo.svg",
  "./icons/logo-maskable.svg",
  "./icons/wordmark.svg",
  "./vendor/sql-wasm.js" + V,
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

function isServiceWorkerScript(url) {
  return /\/sw\.js$/i.test(url.pathname);
}

function isHtmlRequest(req, url) {
  if (req.mode === "navigate") return true;
  if (req.destination === "document") return true;
  const path = url.pathname;
  return path.endsWith("/") || /\/index\.html$/i.test(path);
}

function networkFirst(req) {
  return fetch(req)
    .then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    })
    .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")));
}

function cacheFirst(req) {
  return caches.match(req).then((cached) => {
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
  });
}

function notifyClientsToReload() {
  return self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
    return Promise.all(clients.map((client) => {
      try { client.postMessage({ type: "SW_UPDATED", version: APP_VERSION }); } catch (_) {}
      if (typeof client.navigate === "function") {
        try { return client.navigate(client.url); } catch (_) {}
      }
      return undefined;
    }));
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(LOCAL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => notifyClientsToReload())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  // Let the browser's SW update check hit the network, never a stale cached sw.js.
  if (isServiceWorkerScript(url)) return;
  if (isHtmlRequest(req, url)) {
    event.respondWith(networkFirst(req));
    return;
  }
  event.respondWith(cacheFirst(req));
});
