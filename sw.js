
// Listen for the install event, which is triggered when the service worker is first registered

self.addEventListener('install', event => {

  // Create a new cache

  event.waitUntil(

    caches.open('my-site-cache')

      .then(cache => {

        // Add all the files from the web page to the cache

        return cache.addAll([

          '/',

          '/index.html',

          '/style.css',

          '/script.js',

          '/images/image1.jpg',

          '/images/image2.jpg'

        ]);

      })

  );

});

// Listen for the fetch event, which is triggered whenever a page requests a resource

self.addEventListener('fetch', event => {

  // Try to retrieve the requested resource from the cache

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        // If the resource is in the cache, return it

        if (response) {

          return response;

        }

        // Otherwise, fetch the resource from the network

        return fetch(event.request);

      })

  );

});

