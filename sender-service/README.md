# Push notifications - sender

Use node 8
`yarn` || `npm install`
`yarn start`

## notes:

This POC sends only one notification (one user) a time. To mimic the desired behaviour this should be changed to instead of using **a** subscription JSON, to get a list of them, and send the notification to that list (multiple users).

There's a env selector, that doesn't do anything ATM, it's just a reminder that we can have 2 sets of keys, one for prodution and one for testing.

After subscribing the notification service, on the website side, we get a JSON response that is unique for each user/browser. That should be pasted in the first textarea of the sender.

The key pair (line 60 - 61 of static/scripts/send-message.js) matches the public key in the site.
To generate new keys, install `npm install web-push -g` and run `web-push generate-vapid-keys [--json]`.
