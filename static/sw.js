const cacheName = 'files'

addEventListener('fetch', fetchEvent => {
  const { request } = fetchEvent

  if (request.method !== 'GET') {
    return
  }

  fetchEvent.respondWith(
    (async function() {
      const fetchPromise = fetch(request)

      fetchEvent.waitUntil(
        (async function() {
          const responseCopy = (await fetchPromise).clone()
          const myCache = await caches.open(cacheName)
          await myCache.put(request, responseCopy)
        })()
      )

      if (request.mode === 'navigate') {
        try {
          return await fetchPromise
        } catch {
          return caches.match(request)
        }
      } else {
        const responseFromCache = await caches.match(request)
        return responseFromCache || fetchPromise
      }
    })()
  )
})
