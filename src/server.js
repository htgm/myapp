const http = require('http');
const WebSocketServer = require('ws').Server;

const httpServer = http.createServer();
const wsServer = new WebSocketServer({ server: httpServer });

wsServer.on('connection', s => {
  console.log('conn');
});

wsServer.on('close', s => {
  console.log('close');
});

wsServer.on('message', s => {
  console.log('msg');
});

wsServer.on('error', s => {
  console.log('err?');
});

httpServer.listen(9999);

console.log('server: running');
