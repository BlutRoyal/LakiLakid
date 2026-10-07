// Minimaalne service worker: vajalik, et brauser pakuks "Installi rakendus". Midagi ei cache'i, kõik läheb võrku.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { });
