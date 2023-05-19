// setup express basic server on 8888 port
var express = require('express');
var app = express();
var port = 8888;

app.get('/', function (req, res) {
	res.send('Hello World!');
});

app.listen(port, function () {
	console.log('Example app listening on port ' + port);
});
