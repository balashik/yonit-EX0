var http = require("http");
var player = require("./Player/md.js");

var serverCreated = function(request,respons){

	respons.writeHead(200);

	respons.write(player.getData());
	respons.end("connected to server\n");
}


var server = http.createServer(serverCreated);
server.listen(3000,"127.0.0.1");

console.log("connecting");
