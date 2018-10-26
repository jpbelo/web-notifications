/* eslint-env browser, serviceworker, es6 */
'use strict';

self.addEventListener('push', function(event) {
  const dataObj = JSON.parse(event.data.text());
  console.log(event);
  const options = {
    body: dataObj.text,
    icon: 'images/icon.png',
    badge: 'images/badge.png',
    data: {link: dataObj.link}
  };
  const notificationPromise = self.registration.showNotification(dataObj.title, options);
  event.waitUntil(notificationPromise);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.link)
  );
});
