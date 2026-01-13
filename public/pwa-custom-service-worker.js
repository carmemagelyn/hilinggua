// pwa-custom-service-worker.js
// You can extend this file with custom caching, push, or background sync logic.

self.addEventListener('install', (event) => {
  // Custom install steps
  // event.waitUntil(...)
  console.log('Custom service worker installing...');
});

self.addEventListener('activate', (event) => {
  // Custom activate steps
  console.log('Custom service worker activated!');
});

self.addEventListener('fetch', (event) => {
  // Custom fetch logic (optional)
  // event.respondWith(...)
});
