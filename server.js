var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 1783;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.header("Access-Control-Allow-Origin", "*");
  response.render('index');
});

server.listen(port, function(){
  console.log("Server listening on port " + port);
});

module.exports = server;