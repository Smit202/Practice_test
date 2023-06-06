const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/data') {
        fs.readFile('data.json', (err, data) => {
            if(err) res.end(err.message);
            else {
                // Header value should be live site url in which practical task-1 is running 
                res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
                res.writeHead(200);
                res.end(data);
            }
        });
        // res.end('hello');
    }
});

server.listen(8000);