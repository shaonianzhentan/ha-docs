self.addEventListener('push', function (event) {
  const { icon, title, message, data } = JSON.parse(event.data.text())
  event.waitUntil(
    registration.showNotification(title, {
      body: message,
      data,
      icon: icon || 'https://www.home-assistant.io/images/favicon-192x192.png'
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  const { url } = event.notification.data
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});