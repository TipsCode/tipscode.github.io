self.context = {
  "environment": {
    "client": false,
    "server": true,
    "development": false,
    "production": true,
    "static": true,
    "key": "58810e3d6d35c79757715e2697bd374ad45df7e8"
  },
  "project": {
    "cdn": "",
    "protocol": "https",
    "domain": "localhost",
    "name": "TipsCode",
    "color": "#D22365",
    "type": "website",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/",
    "root": "/",
    "sitemap": true,
    "favicon": "/favicon-96x96.png",
    "disallow": [],
    "icons": {
      "72": "/icon-72x72.png",
      "96": "/icon-96x96.png",
      "128": "/icon-128x128.png",
      "144": "/icon-144x144.png",
      "152": "/icon-152x152.png",
      "180": "/icon-180x180.png",
      "192": "/icon-192x192.png",
      "384": "/icon-384x384.png",
      "512": "/icon-512x512.png"
    }
  },
  "settings": {},
  "worker": {
    "enabled": true,
    "fetching": false,
    "preload": [],
    "headers": {},
    "queues": {}
  }
};

async function load(event) {
  const response = await event.preloadResponse;
  if (response) return response;
  return await fetch(event.request);
}

function toAPI(url) {
  let [path, query] = url.split('?');
  if(path.indexOf('.') === -1) {
    path += '/index.json';
  }
  return query ? `${path}?${query}` : path;
}

async function extractData(response) {
  const html = await response.clone().text();
  const instancesLookup = 'window.instances = ';
  const instances = html.split("\n").find((line) => line.indexOf(instancesLookup) > -1).split(instancesLookup)[1].slice(0, -1);
  const pageLookup = 'window.page = ';
  const page = html.split("\n").find((line) => line.indexOf(pageLookup) > -1).split(pageLookup)[1].slice(0, -1);
  const json = `{"instances": ${instances}, "page": ${page}}`;
  return new Response(json, {
    headers: {'Content-Type': 'application/json'}
  });
}

async function injectData(templateResponse, cachedDataResponse) {
  const data = await cachedDataResponse.json();
  const input = await templateResponse.text();
  const output = input.split(`\n`).map((line) => {
    if(line.indexOf('<title>') > -1) {
      return line.replace(/(<title\b[^>]*>)[^<>]*(<\/title>)/i, `$1${data.page.title}$2`);
    } else if(line.indexOf('window.instances = ') > -1) {
      return `window.instances = ${JSON.stringify(data.instances)};`
    } else if(line.indexOf('window.page = ') > -1) {
      return `window.page = ${JSON.stringify(data.page)};`
    } else if(line.indexOf('window.worker = ') > -1) {
      return line.replace('"online":false', '"online":true').replace('"responsive":false', '"responsive":true');
    }
    return line;
  }).join("\n");
  return new Response(output, {
    headers: {'Content-Type': 'text/html'}
  });
}

async function cacheFirst(event) {
  const cache = await caches.open(self.context.environment.key);
  const cachedResponse = await cache.match(event.request);
  if(cachedResponse) return cachedResponse;
  const response = await load(event);
  await cache.put(event.request, response.clone());
  return response;
}

async function staleWhileRevalidate(event) {
  const cache = await caches.open(self.context.environment.key);
  const cachedResponse = await cache.match(event.request);
  const networkResponsePromise = load(event);
  event.waitUntil(async function() {
    const networkResponse = await networkResponsePromise;
    await cache.put(event.request, networkResponse.clone());
  }());
  return cachedResponse || networkResponsePromise;
}

async function networkFirst(event) {
  const cache = await caches.open(self.context.environment.key);
  try {
    const networkResponse = await load(event);
    await cache.put(event.request, networkResponse.clone());
    return networkResponse;
  } catch(error) {
    return await cache.match(event.request);
  }
}

async function networkDataFirst(event) {
  const cache = await caches.open(self.context.environment.key);
  const url = new URL(event.request.url);
  const api = url.pathname + '/index.json';
  try {
    const response = await load(event);
    const dataResponse = await extractData(response);
    await cache.put(api, dataResponse);
    return response;
  } catch(error) {
    const fallbackResponse = await cache.match(`/offline-${self.context.environment.key}/index.html`);  
    const cachedDataResponse = await cache.match(api);
    if(cachedDataResponse) {
      return await injectData(fallbackResponse, cachedDataResponse);
    } else {
      return fallbackResponse;
    }
  }
}

function install(event) {
  const urls = [
    '/',
    ...self.context.worker.preload.map(toAPI),
    '/offline-' + self.context.environment.key + '/index.html',
    '/client-' + self.context.environment.key + '.css',
    '/client-' + self.context.environment.key + '.js',
    '/manifest-' + self.context.environment.key + '.json'
  ];
  event.waitUntil(async function() {
    const cache = await caches.open(self.context.environment.key);
    await cache.addAll([...new Set(urls)]);
    const homeResponse = await cache.match('/');
    const homeDataResponse = await extractData(homeResponse);
    await cache.put('/index.json', homeDataResponse);
    self.skipWaiting();
  }());
}

self.addEventListener('install', install);

function activate(event) {
  event.waitUntil(async function() {
    const cacheNames = await caches.keys();
    const cachesToDelete = cacheNames.filter(cacheName => cacheName !== self.context.environment.key);
    await Promise.all(cachesToDelete.map((cacheName) => caches.delete(cacheName)));
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
    self.clients.claim();
  }());
}

self.addEventListener('activate', activate);

function staticStrategy(event) {
  event.waitUntil(async function() {
    const url = new URL(event.request.url);
    if(url.origin !== location.origin) return;
    if(event.request.method !== 'GET') return;
    if(url.pathname.indexOf(self.context.environment.key) > -1) {
      return event.respondWith(cacheFirst(event));
    }
    if(url.pathname.indexOf('.') > -1) {
      return event.respondWith(staleWhileRevalidate(event));
    }
    if(url.pathname === '/') {
      return event.respondWith(networkFirst(event));
    }
    event.respondWith(networkDataFirst(event));
  }());
}

self.addEventListener('fetch', staticStrategy);