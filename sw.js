const VERSION='capstone-v3.1-20261119';
const CORE=['./','./index.html','./styles.css?v=3.1','./main.js?v=3.1','./learning.js','./content/lessons.js','./assets/icon.svg','./assets/icon-192.png','./assets/icon-512.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(CORE))));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('capstone-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(VERSION);
  try{const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());if(response.status>=500){const fallback=await cache.match(event.request,{ignoreSearch:true});if(fallback)return fallback}return response}
  catch{const cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;if(event.request.mode==='navigate')return (await cache.match('./index.html'))||Response.error();return Response.error()}
 })());
});
