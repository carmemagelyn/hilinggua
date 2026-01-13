// pwa-register.js
// Registers the custom service worker for the PWA

export function registerCustomServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/pwa-custom-service-worker.js')
        .then(registration => {
          console.log('Custom Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Custom Service Worker registration failed:', error);
        });
    });
  }
}
