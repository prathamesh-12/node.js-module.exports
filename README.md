# node.js-module.exports
basic nodejs modules example using module.exports

Step by Step understanding of how to load modules in node.js app file

Step 1 : Create app.js file as below

var http = require('http');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
	response.writeHead(200, {'Content-type' : 'text/plain'});
	response.write('Hello World!!');
	response.end();
}

Step 2 : create module.js file

create module.exports = {}; //javascripts object

define someFunction() amd someStrig inside module.exports object as follows

module.exports = {
	someFunction : function() {
		console.log("someFunction is called");
	},
	someString : "This is some string"
}

Step 3 : calling module from app

need to require module from app.js

var module = require('./module');

calling the function from app.js file

response.write(module.someString);
module.someFunction();






