const http = require('http')

const server = http.createServer((req,res) => {
    res.end('hello')
})
server.listen(3009, () => {
    console.log('server running on port 3009');
    
})