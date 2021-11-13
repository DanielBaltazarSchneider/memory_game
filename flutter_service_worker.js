'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cbc7582709ee0234944fff5c66b9d034",
"assets/assets/images/flags/america/argentina.jpg": "a288be1ba3172a525a6dc84c1e54c4d0",
"assets/assets/images/flags/america/bolivia.jpg": "3c5bc579c00bb3696ef2491383f80c63",
"assets/assets/images/flags/america/brasil.jpg": "a276de5f76c3ae5d228e00c2face7b40",
"assets/assets/images/flags/america/chile.jpg": "491e226bb1db529c7e621d3bf26a3ff4",
"assets/assets/images/flags/america/colombia.jpg": "2fefca246ec769f9944caf3fe844b882",
"assets/assets/images/flags/america/equador.jpg": "5cd09d64ed9b012a13e34f0eb24f9d52",
"assets/assets/images/flags/america/guiana.jpg": "d6465a9e5b71a3d583027b03f51bf338",
"assets/assets/images/flags/america/paraguai.jpg": "c1e268c6d546c47c353edfa738588d31",
"assets/assets/images/flags/america/peru.jpg": "86745a50d308ad010d1853c3ae39e65d",
"assets/assets/images/flags/america/suriname.jpg": "2befb78f04d95655e4798e0dd1f77008",
"assets/assets/images/flags/america/uruguai.jpg": "a293449f49e5e23b77859370ca787952",
"assets/assets/images/flags/america/venezuela.jpg": "bcd06e9592efee8d7822f687b0e22c67",
"assets/assets/images/flags/clubes/america_mineiro.jpg": "75c09114d3debc677a44ca43f1727b50",
"assets/assets/images/flags/clubes/athletico_paranaense.jpg": "6cd2f53b5a0104889d8ac7010d5b5b49",
"assets/assets/images/flags/clubes/atletico_goianiense.jpg": "55af1c85edde15fa9c7ca866c3eea982",
"assets/assets/images/flags/clubes/atletico_mineiro.jpg": "c8dd83fbbeb1f1b8197c92c29ab36890",
"assets/assets/images/flags/clubes/avai.jpg": "b75fab8110b985ed901ed887bdbe1b90",
"assets/assets/images/flags/clubes/bahia.jpg": "e17ca7c4072ce78cd470eefea798c61d",
"assets/assets/images/flags/clubes/botafogo.jpg": "86538967eba03ae3b55cc26641445143",
"assets/assets/images/flags/clubes/bragantino.jpg": "baacade73a3ddfdd747dbb4d42161e4c",
"assets/assets/images/flags/clubes/ceara.jpg": "2ba4f64c61c5cf33e7a197958e52664f",
"assets/assets/images/flags/clubes/chapecoense.jpg": "0a525f493a26c4ecafcd872249a985f1",
"assets/assets/images/flags/clubes/corinthians.jpg": "31514bd065e20bd39af3fdf575d5aceb",
"assets/assets/images/flags/clubes/coritiba.jpg": "532033b3061e0b515336397247482d5a",
"assets/assets/images/flags/clubes/cruzeiro.jpg": "8375db64ed4b92588f9b27b65f3231b9",
"assets/assets/images/flags/clubes/cuiaba.jpg": "0ea3f2f40179acff1adf2b80db8b8978",
"assets/assets/images/flags/clubes/figueirense.jpg": "6130dad4b9b60ece417d860d6e7c8b2f",
"assets/assets/images/flags/clubes/flamengo.jpg": "136119a6c614b854784fa6c516df4068",
"assets/assets/images/flags/clubes/fluminense.jpg": "081fdf47a906595999ee04def5a14b91",
"assets/assets/images/flags/clubes/fortaleza.jpg": "e9cc0af0b675017e78fbf92a33c57028",
"assets/assets/images/flags/clubes/gremio.jpg": "9d24e6b1f375d60288d67bcd7a3d7e12",
"assets/assets/images/flags/clubes/internacional.jpg": "464fc47e52edd9ed96e77106b2d686c9",
"assets/assets/images/flags/clubes/juventude.jpg": "06558dc385b91e82c54073b35bbeee74",
"assets/assets/images/flags/clubes/palmeiras.jpg": "fadc21a3a3e80555af8d71f91cd9dbd1",
"assets/assets/images/flags/clubes/parana.jpg": "fe6be2170d73a9cf08644670b94a0e6b",
"assets/assets/images/flags/clubes/ponte_preta.jpg": "ebd028411d153f679d98b143388650bb",
"assets/assets/images/flags/clubes/santos.jpg": "8ac4291f776d6011570379fe1da384f9",
"assets/assets/images/flags/clubes/sao_paulo.jpg": "8c51fe7d603907674aebc934b050b186",
"assets/assets/images/flags/clubes/sport.jpg": "e7245ad0e06e9dbb1a0820556d70f76c",
"assets/assets/images/flags/clubes/vasco.jpg": "f6ceedc11af0b32a016291dbccea5993",
"assets/assets/images/flags/estados/acre.png": "504b6c53ded2dd611368af25fb3f580e",
"assets/assets/images/flags/estados/alagoas.png": "7a42f5a98912aecf6c7b46c3770a1d23",
"assets/assets/images/flags/estados/amapa.png": "e6b0268a19770275de34d79dafa6790c",
"assets/assets/images/flags/estados/amazonas.png": "50ddb1bcd673b0874646491555ffe7e3",
"assets/assets/images/flags/estados/bahia.png": "ca166bf70e889403bb97a59b33cac1e5",
"assets/assets/images/flags/estados/ceara.png": "b0c14fe912d8fc0b9a8ecc9c01cc5f80",
"assets/assets/images/flags/estados/distritofederal.png": "c5cdb800045e318316532c4de1360d12",
"assets/assets/images/flags/estados/espirito_santo.png": "eb3b244f646caa4aa0276d4a7a8c4d20",
"assets/assets/images/flags/estados/goias.png": "12c5ec5d2f97db1538e4168e655f849e",
"assets/assets/images/flags/estados/maranhao.jpg": "f26e4d1c4ae024dfad1725f907611e57",
"assets/assets/images/flags/estados/mato_grosso.png": "c235620847692f346d8c200daa7670b7",
"assets/assets/images/flags/estados/mato_grosso_do_sul.png": "4b165f04bc86501cfbf30a777aa1cb9d",
"assets/assets/images/flags/estados/minas_gerais.png": "44a2840cf78155744d550e6e209e702c",
"assets/assets/images/flags/estados/para.png": "80d7c3e237302ce99cbe5dd85675f3c2",
"assets/assets/images/flags/estados/paraiba.png": "a43f67d752c9f7fb0fe43d0df3e177bb",
"assets/assets/images/flags/estados/parana.png": "16049fda302ed33e0df0c7f326e705a0",
"assets/assets/images/flags/estados/pernanbuco.png": "87bea0b1e4d02ebf0f19fde345a676f7",
"assets/assets/images/flags/estados/piaui.png": "7eac40d1a596539970d62a12e37924ac",
"assets/assets/images/flags/estados/rio_de_janeiro.png": "54c2b2b60b23caef5e81d89877700a57",
"assets/assets/images/flags/estados/rio_grande_do_norte.png": "0e45a67c5473a60a007eb2102e1b8085",
"assets/assets/images/flags/estados/rio_grande_do_sul.png": "6de3e4a82eb8d63614e783911728fe1b",
"assets/assets/images/flags/estados/rondonia.png": "2f6acf7b4d406429f8af94b848476c4a",
"assets/assets/images/flags/estados/roraima.png": "7a5920fc3f415080d263aa2d25b88049",
"assets/assets/images/flags/estados/santa_catarina.png": "4117a5dcecc1ccec7039907ca7f13c83",
"assets/assets/images/flags/estados/sao_paulo.png": "9a2e634e3c28964a9a1920b912f3884b",
"assets/assets/images/flags/estados/sergipe.png": "091a520ab4a93ac3ba1d499a543efdab",
"assets/assets/images/flags/estados/tocantins.png": "4edbaeed5d4836259966b7daaea9b92e",
"assets/assets/images/photos/animals/avestruz.jpg": "d169707f14c2c277cad324d1486614d2",
"assets/assets/images/photos/animals/bufalo.jpg": "f9118ebf1cf70ec7bb8b67c2b39fba6c",
"assets/assets/images/photos/animals/cachorro.jpg": "40a6f8decae8a8918844f19446c85f5b",
"assets/assets/images/photos/animals/coala.jpg": "20ee0926e24d45762681a89eb3ea24e4",
"assets/assets/images/photos/animals/cobra.jpg": "acfebd15649e26d97d1b3e0fc4a32795",
"assets/assets/images/photos/animals/coelho.jpg": "38905582f5c92a03cac018d709bf54df",
"assets/assets/images/photos/animals/coruja.jpg": "148b0fe01639b3ed9a2d82cb31eb61fd",
"assets/assets/images/photos/animals/elefante.jpg": "8237799dcb8d16d5a97b87eb8a633cec",
"assets/assets/images/photos/animals/flamingo.jpg": "4584f65ac8ad83d7247465ae84be48d9",
"assets/assets/images/photos/animals/gato.jpg": "f657f8c2bbc83b8fd2e6e55ca2da9eff",
"assets/assets/images/photos/animals/gaviao.jpg": "b359fd285c883ab89ce01f4c13d55dd7",
"assets/assets/images/photos/animals/ipopotamo.jpg": "17e6b5476b0224277584abfcc9583182",
"assets/assets/images/photos/animals/jacare.jpg": "37878251debd2fcc4805b5d4534f779d",
"assets/assets/images/photos/animals/javali.jpg": "cd2364aeab653349f91009a2e4f6088d",
"assets/assets/images/photos/animals/macaco.jpg": "17932b0399eeb13ca9d8171b2b71def3",
"assets/assets/images/photos/animals/onca.jpg": "c0fe5aa35d8cb85694110d04ebea76f2",
"assets/assets/images/photos/animals/ovelha.jpg": "e66bdc9476cc891084fbb1a5c0bce6f0",
"assets/assets/images/photos/animals/panda.jpg": "f08b571316f1b3ad2c62f57f58c948e6",
"assets/assets/images/photos/animals/pinguim.jpg": "53c1e07f15f6f4a840e2a0c5ab7027a8",
"assets/assets/images/photos/animals/porco.jpg": "931484d27957d39d2efe6fbe5c11e4b9",
"assets/assets/images/photos/animals/preguica.jpg": "98eb38bc5a5562410d1bf5872640fba8",
"assets/assets/images/photos/animals/raposa.jpg": "e88b747f58eb58f650ecb1ad43d4fe53",
"assets/assets/images/photos/animals/rato.jpg": "4ef620c0213903214a179bc9f61dfe72",
"assets/assets/images/photos/animals/tatu.jpg": "ade6df9f289b875fbe57a9b7c4901708",
"assets/assets/images/photos/animals/tigre.jpg": "7eaaf5e5b02aa593c5c286ec3d8566aa",
"assets/assets/images/photos/animals/tucano.jpg": "31782e792d2d1f0525b8058238cbcdbc",
"assets/assets/images/photos/animals/urso.jpg": "1858cad3b1913d9989677df2126304fb",
"assets/assets/images/photos/animals/urubu.jpg": "6d8416e72476413227b86d08ce7087c1",
"assets/assets/images/photos/animals/veado.jpg": "e635a8a31bd7e4d9b4fe98938f79a276",
"assets/assets/images/photos/animals/zebra.jpg": "c6f98ab2296140ac32e4ba36745d2773",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "db725e32f36725f0e6fe1f192a6a4ff4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ac0c9fbe4fc2917592eeeb6b36de1b43",
"/": "ac0c9fbe4fc2917592eeeb6b36de1b43",
"main.dart.js": "fa3b37612bbac985d39f1f5019be4645",
"manifest.json": "4ab153e8d57c4d85a830fec23d4088ed",
"version.json": "bc5c0785f70facf275f4842fdc5c6770"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
