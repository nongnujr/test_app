var http = require('http');
var port = 8080;
function handleRequest(req,res){
	res.write("<p>Hello World</p>")
	res.end();
}
var server = http.createServer(handleRequest)
server.listen(port, function(){
	console.log("server is running")
});