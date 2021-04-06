//websocket based speaker's backend
var http = require('http');
var masterChannel = '';
http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'audio/webm',
        'Grip-Hold': 'stream',
        'Grip-Channel': masterChannel,
        'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
        'Access-Control-Expose-Headers': 'Date',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Max-Age': 9000
    });
}).listen(8000);
console.log('backend 8000 port is active and 7999 can proxify me');