const CACHE_NAME = 'chic-threads-cache-v1';
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/App.tsx',
  '/types.ts',
  '/data/products.ts',
  '/components/Header.tsx',
  '/components/Hero.tsx',
  '/components/ProductList.tsx',
  '/components/ProductCard.tsx',
  '/components/Cart.tsx',
  '/components/Footer.tsx',
  '/components/icons.tsx',
  '/metadata.json',
  'https://cdn.tailwindcss.com',
];

// On install, cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(APP_SHELL_URLS);
      })
      .catch(err => {
        console.error('Failed to cache app shell:', err);
      })
  );
});

// On activate, clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Use a "stale-while-revalidate" strategy for fetching
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(event.request);
      
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse.status === 200) {
          cache.put(event.request, networkResponse.clone());
        }
        return networkResponse;
      }).catch(err => {
        console.error('Fetch failed:', err);
        // If fetch fails and we have a cached response, we can still use it.
        if (cachedResponse) return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
