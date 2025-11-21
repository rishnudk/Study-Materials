// const express = require('express')
// const app = express()
// /// Define a route for the root URL
// app.get('/', (req,res) => {
//     res.send('hello world')
// })

// app.listen(3001, () =>{
//     console.log(`server is running on http://localhost:3001`);
    
// })


// const http=require('http')
// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')
//     res.end('hello world')
// })
// server.listen(3001, () => {
//     console.log(`server running on http://localhost:3001`);
    
// })

// const express = require('express')
// const app = express()

// app.get('/', (req,res) =>{
//     res.send('hiiiiii')
// } )

// app.listen(3001, () => {
//     console.log(`working http://localhost:3001/`);
    
//})

const http = require('http')
const app = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('contenttype' , ' text/plain')
   res.end('hellootrrtt')
})
app.listen(3001, () => {
    console.log(`server running http://localhost:3001`);
    
})
