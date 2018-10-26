/* eslint-env node */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');

const app = express();

// Parse JSON body
app.use(bodyParser.json());

app.post('/api/send-push-msg', (req, res) => {
  const options = {
    vapidDetails: {
      subject: 'https://developers.google.com/web/fundamentals/',
      publicKey: req.body.applicationKeys.public,
      privateKey: req.body.applicationKeys.private
    },
    // 1 hour in seconds.
    TTL: 60 * 60
  };

  webpush.sendNotification(
    req.body.subscription,
    req.body.data,
    options
  )
  .then(() => {
    res.status(200).send({success: true});
  })
  .catch((err) => {
    if (err.statusCode) {
      res.status(err.statusCode).send(err.body);
    } else {
      res.status(400).send(err.message);
    }
  });
});

app.use('/', express.static('static'));

// Start the server
const server = app.listen(process.env.PORT || '8080', () => {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
