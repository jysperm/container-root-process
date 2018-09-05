const http = require('http');

const server = http.createServer( (req, res) => {
  res.end();
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8000, () => {
  console.log('Started listening on 8000');
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, exit after 5 seconds');

  let seconds = 5;

  function tick(seconds) {
    console.log(`${seconds} seconds ...`)
    setTimeout( () => {
      tick(seconds - 1)
    }, 1000)
  }

  tick(5)

  setTimeout( () => {
    process.exit()
  }, 5000)
});
