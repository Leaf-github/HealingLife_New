var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){


    var _url = request.url;


    if(request.url == '/'){
      _url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }


    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));



});
app.listen(3000);
