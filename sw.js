const CACHE_NAME = 'logloom-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Firebaseのリアルタイム同期を妨げないよう、通信はそのまま通す設定
  event.respondWith(fetch(event.request));
});
