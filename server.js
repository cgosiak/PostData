// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

const io = require('socket.io')(server);

io.sockets.on('connection', function (socket) {

  console.log("New Connection Established");

  socket.on('room', function(room) {
    console.log("Joining Room " + room);
    socket.join(room);
  });

  socket.on('post-event', function (data) {
    var message = {
      title: "Time Received: " + data.originTime,
      content: data.postData
    };

    io.sockets.in(data.endpoint).emit("new-post", message);
  });

  // Log Angular Events to Console
  socket.on('log', (logMessage) => {
    console.log("INFO: " + logMessage);
  })

});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));