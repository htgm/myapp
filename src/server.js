const WebSocketServer = require('ws').Server;

const wsServer = new WebSocketServer({ port: 9999 });

wsServer.on('connection', (ws, req) => {
  const ip = req.connection.remoteAddress;
  if (!ip) return ws.terminate();
  console.log('conn from '+ip);

  ws.on('close', s => {
    console.log('close '+s);
  });
  
  ws.on('message', msg => {
    console.dir(msg)
    console.log('msg:'+(typeof msg));
  });

  ws.on('error', s => {
    console.log('err:'+s);
  });
  
});

console.log('server: running');
