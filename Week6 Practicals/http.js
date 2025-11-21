const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.end('Hello world')
})
server.listen(3000, () => {
    console.log('listening on : http://localhost:3000');
    
})

