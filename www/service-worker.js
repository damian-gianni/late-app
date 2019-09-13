self.__precacheManifest = [
  {
    "url": "/_next/static/chunks/commons.82e0e55a07f27488b58a.js",
    "revision": "f8cdfcd47f7b9746393f"
  },
  {
    "url": "/_next/static/css/commons.b3324613.chunk.css",
    "revision": "f8cdfcd47f7b9746393f"
  },
  {
    "url": "/_next/static/runtime/main-f00d5c7bc3f7c0d4b551.js",
    "revision": "1c59a8e3a341baed16e4"
  },
  {
    "url": "/_next/static/runtime/webpack-4b444dab214c6491079c.js",
    "revision": "71726f334912f74c262a"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/_app.js",
    "revision": "843033bc7b4b13610a72"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/_error.js",
    "revision": "185e7ae11f6be134f1ef"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/index.js",
    "revision": "905ae77d5fcf1a23ffe6"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/museo.js",
    "revision": "04bdd32d7ad499139c67"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/nosotros.js",
    "revision": "81aa5278c94e11bd6c03"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/noticias.js",
    "revision": "69248c46091279c36e5d"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/radio.js",
    "revision": "d4f772cb24ff1d7592a7"
  },
  {
    "url": "/_next/static/sc-gJloUrKwMt3XRGW445/pages/videos.js",
    "revision": "87edfd0378cee2dca83a"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/getParams.js",
    "revision": "aadca4ee1b084e176fde1ccd847e9503"
  },
  {
    "url": "static/images/b&w_blackboard.jpg",
    "revision": "545b456f126ace7fc4dbb2b3eb580760"
  },
  {
    "url": "static/images/favicon/android-chrome-192x192.png",
    "revision": "ad83c78376e67ab9b21bbc36a8feefb9"
  },
  {
    "url": "static/images/favicon/android-chrome-512x512.png",
    "revision": "c3f4870f2d2510d4713fc21f83e761ae"
  },
  {
    "url": "static/images/favicon/apple-touch-icon.png",
    "revision": "ef2f6bb378c4d2794a712e6c1ea73917"
  },
  {
    "url": "static/images/favicon/browserconfig.xml",
    "revision": "e4e40b0c82d228add33b5bcfe276a859"
  },
  {
    "url": "static/images/favicon/favicon-16x16.png",
    "revision": "c41391cde9a6ed232ae5b12f14bac3ff"
  },
  {
    "url": "static/images/favicon/favicon-32x32.png",
    "revision": "9d4f972b830443644db9ba03e6e3413e"
  },
  {
    "url": "static/images/favicon/favicon.ico",
    "revision": "d2d7fa6185db277dc5af9e23dc33764e"
  },
  {
    "url": "static/images/favicon/mstile-150x150.png",
    "revision": "2084fb32b905e18db66d378362c2722f"
  },
  {
    "url": "static/images/favicon/safari-pinned-tab.svg",
    "revision": "1ed83814ac81ca2fcd8776a113bae91b"
  },
  {
    "url": "static/images/icons/icon-128x128.png",
    "revision": "2b8f58319b41a8c4076b46b207536e3f"
  },
  {
    "url": "static/images/icons/icon-144x144.png",
    "revision": "126cf54065902d4d0de5290a5187f08f"
  },
  {
    "url": "static/images/icons/icon-152x152.png",
    "revision": "5960d11641088dee02c56fa35cf91b52"
  },
  {
    "url": "static/images/icons/icon-192x192.png",
    "revision": "67fcc7d26f3ea6a069146b8da8ce6e91"
  },
  {
    "url": "static/images/icons/icon-384x384.png",
    "revision": "afca21052195ab66f4e4744de307fa9d"
  },
  {
    "url": "static/images/icons/icon-512x512.png",
    "revision": "f01c1617c3ca7d59e2bcb458143e47e3"
  },
  {
    "url": "static/images/icons/icon-72x72.png",
    "revision": "87e81936c59730484a29cc91a2236020"
  },
  {
    "url": "static/images/icons/icon-96x96.png",
    "revision": "bc24b78d263deeac671e98ee0f2717eb"
  },
  {
    "url": "static/manifest.json",
    "revision": "cc2c5950d23d7e7eb7519e109ff7a563"
  },
  {
    "url": "static/sw-import.js",
    "revision": "94c9152facf3be6918e8b7a51723678a"
  },
  {
    "url": "static/sw.js",
    "revision": "c22f918d4ff3e5afff66f2d85ae4cfa9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
