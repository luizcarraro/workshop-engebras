const http = require('http');

var responde = function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
}

const server = http.createServer(responde);

server.listen(3000);
