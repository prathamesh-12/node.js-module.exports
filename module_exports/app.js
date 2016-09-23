var http = require('http');
var module = require('./module');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
	response.writeHead(200, {'Content-type' : 'text/plain'});
	response.write('Hello World!!');
	response.write(module.someString);
	module.someFunction();
	response.end();
}