if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const a=e=>n(e,o),d={module:{uri:o},exports:s,require:a};i[o]=Promise.all(c.map((e=>d[e]||a(e)))).then((e=>(r(...e),s)))}}define(["./workbox-3bd9af45"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.bundle.js",revision:"d16addd26722cc9866ee237d1dcdb97f"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"658e6d8d616dc2876b6085763353bf8e"},{url:"icon/icon-120x120.png",revision:"c3cf336c50e0606e45fbadbc09e3e032"},{url:"icon/icon-144x144.png",revision:"857947e07cf168f31e315eee43cdbbbc"},{url:"icon/icon-152x152.png",revision:"b0cc6d4436a62b3572f35609991c68e7"},{url:"icon/icon-192x192.png",revision:"34454a34cbab85202ab3951cfeaa11ac"},{url:"icon/icon-310x310.png",revision:"92e6f59176860cb5ea9a759fd57d0ce0"},{url:"icon/icon-72x72.png",revision:"45b9acd7e319700bf93e57ade9f3988b"},{url:"icon/icon-96x96.png",revision:"b455a57c1db1f5223c0856615bed7b60"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"9e56dbd17111cf5d9e8f1f07c90ac679"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restaurants-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restaurant-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
