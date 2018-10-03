const si=require('./osinfo/index').si;
const fw=require('./osinfo/index').fw;

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});

    if(req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
    
        res.end('No data found');
      }
    
      else if(req.url === '/api/systeminfo') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
    
        console.log(si.getSysteminfo());
    
        res.end(JSON.stringify(si.getSysteminfo()));
      }
      else if(req.url === '/api/userinfo') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
    
        console.log(si.getUserinfo());
    
        res.end(JSON.stringify(si.getUserinfo()));
      }
      else if(req.url === '/api/firewall') { 
        res.writeHead(200, { 'Content-Type': 'application/json'});
    
        console.log(fw.getStatuses());
    
        res.end(JSON.stringify(fw.getStatuses()));
      }
      else {
            // request not found, send back 404
            var errorMessage = 'Error - page not found';
            res.writeHead(404, errorMessage);
            res.end(errorMessage);
      }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});