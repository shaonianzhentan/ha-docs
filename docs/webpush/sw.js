self.addEventListener('push', function (event) {
  const { icon, title, message } = JSON.parse(event.data.text())
  event.waitUntil(
    registration.showNotification(title, {
      body: message,
      icon: icon || 'https://www.home-assistant.io/images/favicon-192x192.png'
    })
  );
});

self.addEventListener('notificationclick', function (event) {
  const { url } = JSON.parse(event.data.text())
  event.notification.close();
  event.waitUntil(clients.openWindow(url));
});