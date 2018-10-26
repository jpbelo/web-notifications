# Push notifications - site

To start this service, use Web [Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and choose the `app` folder.

## notes:

This is a POC to simulate the website, where we can have a button the user clicks for subscribing the notification service.

The response we get after subscribing is supose to be saved on a database to then be used when we want to send a notification. In this POC, this is used manually as there's no database integration yet.

There is a public key (line 4 of main.js) that matches the one in the notification sender service.

## support - i've tested so far

| browser | device  | works | doesn't work |
|---------|---------|-------|--------------|
| chrome  | mac     | x     |              |
| chrome  | android | x     |              |
| chrome  | iphone  |       |              |
| safari  | mac     |       | x            |
| safari  | iphone  |       | x            |
| firefox | mac     | x     |              |
|         |         |       |              |
