// Create web server
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Hello, World!</h1>');
// });
// server.listen(3000);
// console.log('Server is running at http://localhost:3000/');
// Create web server using express
var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('<h1>Hello, World!</h1>');
});
app.listen(3000);
console.log('Server is running at http://localhost:3000/');