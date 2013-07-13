var express = require('express');
var fs = require('fs');
var output;
var app = express.createServer(express.logger());

var buf = new Buffer(fs.readFileSync('index.html'));
//buf.toString(output);
app.get('/', function(request, response) {
  //  response.send(buf.toString());
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
