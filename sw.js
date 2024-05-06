/* Service Worker basic template */\nconst CACHE_NAME = 'site-static-cache';\nvar assets = [
    '/index.html',\n    '/src/styles/css/app.css',\n    '/src/app.js',\n    '/favicon.ico',\n    '/manifest.json',\n    /* Add more static assets here */\n];\n\nself.addEventListener('install', event => {\n    event.waitUntil(\n        caches.open(CACHE_NAME).then(cache => {\n            return cache.addAll(assets);\n        })\n    );\n});\n\nself.addEventListener(fetch', event => {\n    event.respondWith(\n        caches.match(event.request).then(response => response || fetch(event.request))\n    );\n});\n