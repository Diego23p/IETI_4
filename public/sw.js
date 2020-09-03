


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/App.css',
       '/App.js',
       '/App.test',
       '/index.css',
       '/index.js',
       'components/Login.css',
       'components/Login.js',
       'components/logoTask.png',
       'components/task.css',
       'components/task.js',
       'components/TaskList.js'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
    
    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);    
    })

    );    
});