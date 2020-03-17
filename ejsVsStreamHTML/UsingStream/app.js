var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

const server = http.createServer((req ,res)=>{
    console.log(`Request was made: ${req.url}`);
    res.writeHead(200 , {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html' , 'utf8')
    .pipe(res);
});

server.listen(4000 , ()=>{
    console.log('server start working on port 4000');
})