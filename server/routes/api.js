const express = require('express');
const router = express.Router();
var socket = require('socket.io-client')('http://localhost:8080');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('{ "MESSAGE" : "API Works" }');
});

router.get('*', (req, res) => {
  res.send('{ "ERROR" : "Invalid API Call" }');
});

router.post('/:endpoint', (req, res) => {

  var message = {
    originTime: new Date(),
    endpoint: req.params.endpoint,
    postData: req.body
  };

  socket.emit('post-event', message);
  res.json(req.body);
});

module.exports = router;