var express = require("express");

var app = express();
app.use(express.static(__dirname));
var server;
var port = 8099;

server = app.listen(port, function() {
	console.log("Application available on %s port", port);
});