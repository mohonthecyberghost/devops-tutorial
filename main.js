/*
Authon: Sazzad Ahmmed Mohon
*/
// load the http module
var http = require('http');

// This is a comment

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello getintodevops.com\n");
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");

// Added Endpoint for main.js