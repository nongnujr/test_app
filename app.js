var http = require('http');
var port = 8080;
function handleRequest(req,res){
	res.write("<p>Hello World 123</p>")
	res.end();
}
var server = http.createServer(handleRequest)
server.listen(process.env.PORT || 3000, function(){
  console.log('listening on');
});