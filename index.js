var http = require('http');
var dt = require('./firstModule');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("waktu sekarang : "+ dt.waktuKu());
    res.end();
    console.log("berhasil")
}).listen(3000);
