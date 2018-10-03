const http = require('http')
const osModule = require('./osinfo')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end('No data found\n')
    } else if(req.url == '/api/systeminfo') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(osModule.systemInfo.getSysteminfo().formatted)
    } else if(req.url == '/api/userinfo') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(osModule.systemInfo.getUserInfo().formatted)
    } else if(req.url == '/api/firewall') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(`[${osModule.firewall.getStatuses().join(", ")}]`)
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'application/json')
        res.end()
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})