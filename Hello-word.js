console.log("helloword");
const http =require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("hello node")
});
server.listen(3000,function(){
    console.log('server is running at 3000')
});

