var http = require('http');
var url  = require('url');

http.createServer(function(req, res) {
    var proxyReq = http.request(url.parse(req.url));
    proxyReq.on('response', function(proxyRes){
        proxyRes.on('data', function(chunk){
            res.write(chunk, 'binary');
        });
        proxyRes.on('end', function(){
            res.end();
        });
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
    });
    proxyReq.on('error', function(e){
        console.log('problem with request: ' + e.message);
    });

    req.on('data', function(chunk){
        proxyReq.write(chunk, 'binary');
    });
    req.on('end', function(){
        proxyReq.end();
    });
}).listen(8080);
