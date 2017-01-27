var http = require('http');
var server = http.createServer().listen(8080);

server.on('request', function (req, res) {
	res.writeHead(200);
	res.write('Server started');
	res.end();
});

console.log('Server created');
