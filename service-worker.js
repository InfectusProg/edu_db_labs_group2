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
    "url": "404.html",
    "revision": "92b24220b5e9665c2e21e5add15decb7"
  },
  {
    "url": "assets/css/0.styles.79226024.css",
    "revision": "1d2dd05b9a3f5b2a2ce69130b9945c46"
  },
  {
    "url": "assets/img/add-role.ac0642b8.png",
    "revision": "ac0642b879d7bb70b75bb5482bfe8dcd"
  },
  {
    "url": "assets/img/get-role.75750244.png",
    "revision": "757502441b8f2759e18e9d82c94fd8dc"
  },
  {
    "url": "assets/img/get-roles.69d4aa27.png",
    "revision": "69d4aa27968712a44d716d81cef5e92b"
  },
  {
    "url": "assets/img/relationalSchema.4d0bdb0b.png",
    "revision": "4d0bdb0b4bb3551211c4ab0253c38a6c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.98b1d7e6.js",
    "revision": "2ae075bcbfc3d9d9d9f3658deff768ee"
  },
  {
    "url": "assets/js/11.ab813869.js",
    "revision": "a6dd6c6f755e298478f754d4e1270ef4"
  },
  {
    "url": "assets/js/12.022538e1.js",
    "revision": "a603ee8224338f0bd66f9a1169297313"
  },
  {
    "url": "assets/js/13.7efc2e03.js",
    "revision": "a3e567e1dd8173f5cd8f67237dc6f741"
  },
  {
    "url": "assets/js/14.31f91b41.js",
    "revision": "33705167b94393fb3e4c9f88da970dc1"
  },
  {
    "url": "assets/js/15.56a8c69f.js",
    "revision": "608add6262eeb4347e6a6f9fff48fa6f"
  },
  {
    "url": "assets/js/16.e1c1376e.js",
    "revision": "13636cba81e5492318e807e4ad1ec0cd"
  },
  {
    "url": "assets/js/17.74d7966d.js",
    "revision": "df2820efee8d5f32ec38b840bc579546"
  },
  {
    "url": "assets/js/18.18bb2426.js",
    "revision": "7250c2acee2e2afc530aafdd142b013f"
  },
  {
    "url": "assets/js/19.33ffd5a0.js",
    "revision": "f0bae812da65827cd37daf00b803f325"
  },
  {
    "url": "assets/js/2.d4b8c5f4.js",
    "revision": "387eee010feff9b8611d6af5bb53808e"
  },
  {
    "url": "assets/js/20.49fa49a0.js",
    "revision": "cdb5e3c20631935d97ee39084b5f10e4"
  },
  {
    "url": "assets/js/21.8869dc68.js",
    "revision": "835dddf5bc2fadaa2dda256f1eccfb30"
  },
  {
    "url": "assets/js/22.3dde8167.js",
    "revision": "e58b48e991c88f7aa48d9632134c0386"
  },
  {
    "url": "assets/js/23.9dafd561.js",
    "revision": "8048a10b39a0a4d2573b955d92f0f4b3"
  },
  {
    "url": "assets/js/24.6796e6c2.js",
    "revision": "64c408112536422fd879312aa866918c"
  },
  {
    "url": "assets/js/26.50db2776.js",
    "revision": "2366541b1883d3ba3aaa9fc6a045dc87"
  },
  {
    "url": "assets/js/3.97e3b159.js",
    "revision": "62fcf2aefb42eef07dceca26126775cf"
  },
  {
    "url": "assets/js/4.8b5ca609.js",
    "revision": "6ca05e95e3dcdd4cd3fdfd01a6dc026f"
  },
  {
    "url": "assets/js/5.0b9ab462.js",
    "revision": "4df2ad404675fbb3db645e412652ce8b"
  },
  {
    "url": "assets/js/6.e06c244c.js",
    "revision": "b895ea23a0f1edb3394fe034b0f57492"
  },
  {
    "url": "assets/js/7.17e22aa6.js",
    "revision": "469233d70a9cfcd04a89e81e32f4fff8"
  },
  {
    "url": "assets/js/8.6914c04e.js",
    "revision": "422e098e9d18ed44904bf0437c31e62c"
  },
  {
    "url": "assets/js/9.ff1af1f7.js",
    "revision": "80683277c6f12d517c9194192b7106d7"
  },
  {
    "url": "assets/js/app.c992d013.js",
    "revision": "edcdff34e35dde728c3a715ec654de08"
  },
  {
    "url": "conclusion/index.html",
    "revision": "74aba1fafd99bded61ba33618d7155cf"
  },
  {
    "url": "design/index.html",
    "revision": "377c61a9ba8bde244732446013ec3ea0"
  },
  {
    "url": "index.html",
    "revision": "501aaea77e2aa3333dd4d57d8438a931"
  },
  {
    "url": "intro/index.html",
    "revision": "f6ff18e4ce2995e58a17e2e9404fb37b"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "6aec883ebf70534c18fe4ab81a8b0f1e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4545f91d0c2b30ddeaa8751b76ae1aac"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3096126e46b1bcc3b5505872ee8e118c"
  },
  {
    "url": "software/index.html",
    "revision": "aab45eeddc62449c7a6eab80756a11a1"
  },
  {
    "url": "test/index.html",
    "revision": "fab1fa02d4582ff132d989a47e95e1bb"
  },
  {
    "url": "use cases/index.html",
    "revision": "1f79996742c8e2a49fc409edea6512b3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
