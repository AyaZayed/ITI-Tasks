const FILES_TO_CACHE = [
        "./",
        "./index.html",
        "./style.css",
        "./manifest.json",
        "./icon512_maskable.png",
        "./icon512_rounded.png",
        "./images/logo.png",
        "./images/search.png",
        "./images/dish.png",
        "./images/item1.png",
        "./images/item2.png",
        "./images/item.png",
        "./images/orange.png",
        "./images/grapes.png",
        "./images/guava.png",
        "./images/tasty.png",
        "./images/client.png",
        "./images/orange-dish.png",
        "./images/fb.png",
        "./images/twitter.png",
        "./images/linkedin.png",
        "./images/instagram.png"
];

self.addEventListener("install", (event) => {
        console.log("sw installed");
        self.skipWaiting();
        event.waitUntil(
                caches
                        .open("our-app")
                        .then((cache) =>
                                cache.addAll(FILES_TO_CACHE)
                        )
        );
});

self.addEventListener("fetch", (event) => {
        event.respondWith(
                caches.match(event.request.url).then((file) => {
                        if (file) {
                                return file;
                        } else {
                                return fetch(event.request.url);
                        }
                })
        );
});