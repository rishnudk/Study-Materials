const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type' : text/plain})
    res.end('helloooo')
})

server.listen(3000, () => {
    console.log('succcess');
    
})