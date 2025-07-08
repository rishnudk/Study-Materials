const http = requie('http')

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.send('hello world')
})

server.listen(3000,() => {
    console.log('running')
})