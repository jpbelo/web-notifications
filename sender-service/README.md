# Push notifications - sender

To start this app run `yarn start`

## notes:

This POC sends only one notification (one user) a time. To mimic the desired behaviour this should be changed to instead of using **a** subscription JSON, to get a list of them, and send the notification to that list (multiple users).

There's a env selector, that doesn't do anything ATM, it's just a reminder that we can have 2 sets of keys, one for prodution and one for testing.

After subscribing the notification service we get a JSON response that is unique for each user/browser. That should be pasted in the first textarea of the sender.

The key pair (line 60 - 61 of send-message.js) matches the public key in the site.
