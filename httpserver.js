http = require("http")
http.createServer(function (request, response)
 {response.writeHead(200, {'Content-Type': 'text/plain'});
 response.end("hello World\n");}).listen(8080);
 
console.log("server runnig at http://127.0.0.1:8080/");
