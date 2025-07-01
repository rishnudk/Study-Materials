// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.end('helloworld')
// })
// server.listen(2000, () => {
//     console.log('hiiiii http://localhost:2000');
    
// })

//  const http = require('http')
//  const server = http.createServer((req,res) => {
//     res.end('hiiiiii')
//  })
//  server.listen(3000, () =>  {
//     console.log('hiii http://localhost:3000')
    
//  })

//Use fs And create file and write 'helo world'
// const fs = require('fs')

// const filePath ='hello.txt'
// const content = 'hello world'

// fs.writeFile(filePath,content,(err) => {
//    if(err) {
//       console.log('error writing to file',err);
      
//    }
//    else {
//       console.log('successss');
      
//    }
// })

///writw a file "fs"

// const fs = require('fs')

// fs.writeFile('hello.txt', 'inside' ,(err) =>{
//    if(err){
//       console.log('errorrrr',err);
      
//    }else {
//       console.log('donneeee');
      
//    }
// })

//readfile

// const fs=require('fs')

// fs.readFile('exe.txt','utf8', (err,data) =>{
//    if(err) {
//       console.log('error',err);
      
//    }
//    else{
//       console.log('file found',data)
      
//    }
// })

//append file

// const fs =require('fs')
// fs.appendFile('exe.txt', '\nAppended content',(err) => {
//    if(err){
//       console.log('error appending file:',err);
      
//    }
//    else{
//       console.log('content appended successfully');
      
//    }
// })

//delete A file

// const fs = require('fs')
// fs.unlink('hello.txt',(err) => {
//    if(err) {
//       console.log('error deleting file', err);
      
//    }
//    else {
//       console.log('file deleted');
      
//    }
// })

// Write the current date and time to a file using the FS module

// const fs = require('fs')
// const now = new Date()
// const date =now.toString()

// fs.writeFile('current.txt',date,(err) => {
//    if(err){
//       console.log('error writning',err);
      
//    }
//    else {
//       console.log('suceessfully');
      
//    }
// })


//> Create basic middleware. 

// const express = require('express')
// const app = express()

// app.use((req,res,next)=> {
//    console.log('middleware applied to all route');
//    next()
// })

// app.get('/', (req,res) => {
//    res.send('helffflo world')
// })

// app.listen(3000, () => {
//    console.log('server is running 3000');
   
// })


 //router level middleware

//  const express = require('express')
//    const app = express()

//    app.use('/about',(req,res,next) =>{
//       console.log(`url : ${req.url}, method : ${req.method}`);
//       next()
//    })

//    app.get('/', (req,res) => {
//       res.send(' home page')
//    })

//    app.get('/about', (req,res) => {
//       res.send('about page')
//    })

//    app.listen(3000, () => {
//       console.log('server runnijng http://localhost:3000');
      
//    })

//> Create Process.nextTick. 

//  console.log('start');

//  process.nextTick(() => {
//    console.log('inside tick');
   
//  })
//  console.log('end');


// http server


// const http = require('http')

// let server = http.createServer((req,res) => {
//    res.end('helloooo')
// })
// server.listen(3000, () => {
//    console.log('server is running http://localhost:3000');
   
// })


// gegt post

// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get('/api/data', (req,res) => {
//    res.send('thhis is a GET request')
// })

// app.post('/api/data',(req,res) => {
//    const data = req.body
//    res.send(`you send ${JSON.stringify(data)}`)
// })

// app.listen(3000, () => {
//    console.log('runninggggg http://localhost:3000');
   
// })

//date


// const fs = require('fs')
// const date = Date()

// fs.writeFile('date2.txt',date,(err,data) => {
//    if(err) {
//       console.log('error');
      
//    }
//    else{
//       console.log('succes');
      
//    }
// })

// const fs = require('fs')
// fs.readFile('date.txt','hii', 'utf8',(err,date) => {
//    if(err) {
//       console.log('error');
      
//    }
//    else{
//       console.log('successs');
      
//    }
// })


//pipe()

// const fs = require('fs')
// const readStream = fs.createReadStream('exe.txt')
// const writeStream = fs.createWriteStream('output')

// readStream.pipe(writeStream)

// readStream.on('end', ()=> {
//    console.log('coppied');
   
// })

// fs() readfile

// const fs = require('fs');


// fs.readFile('exe.txt','utf8',(err,data) => {
//    if(err) {
//       console.log('errorrrr',err);
      
//    }
//    else{
//       console.log(data);
      
//    }
// })
///sync method readfile
// try {
//    const data = fs.readFileSync('exe.txt','utf8')
//    console.log(data);
   
// } catch(err) {
//    console.log('errorr' , err);
   
// }

//write()
// let promise = new Promise((resolve,reject) => {
//    resolve('data fetched')
// })
// promise.then((data) => {

//    fs.writeFile('e.txt',data, 'utf8',(err) => {
//       if(err) {
//          console.log('errrrr',err);
         
//       }else {
//          console.log('success');
         
//       }
//       })

// })


// try {
// fs.writeFileSync('e.txt','new things','utf8')
// console.log('successs');

// }
// catch(err) {
//    console.log('errorrr',err);
   
// }

//append()

// const promise = new Promise((resolve,reject) => {
//    resolve('fetchingg')
// })
// promise.then(() => {

//    fs.appendFile('e.txt','\nnew appendddd','utf8',(err) => {
//       if(err) {
//          console.log('errr',err);
         
//       }
//    else{
//       console.log('success');
      
//    }
//    })

// })
                  // promise write

// const fs = require('fs')

// const promise = new Promise((resolve,reject) => {
//    resolve('hellooooo')
// })
// promise.then((data) => {
 
//     fs.readFile('e.txt','utf8',(err,data) => {
//       if(err) {
//          console.log('error',err);
         
//       }
//       else{
//          console.log('success',data);
         
//       }
//     })
// })

//error handeling middleware
// const express = require('express')
// const app = express()

// app.get('/',(req,res) => {
//    res.send('hello world')
// })
// app.use((err,req,res,next) => {
//    console.log('error')
//    res.status(500).send('error')
   
// })
// app.listen(3000, () => {
//    console.log('running on 3000 : http://localhost:3000/');
   
// })

//fs read

// const fs = require('fs')
// const data = 'hello'
// fs.writeFile('exe.txt',data,(err) => {
//    if(err) {
//       console.log('error',err);
      
//    }
//    else{
//       console.log(' writiten ');
      
//    }
// })
            //simple http server

// const http = require('http')

// const server = http.createServer((req,res) => {
//    res.write('goood night bee')
//    res.end()
// })
// server.listen(3000, () => {
//    console.log('running : http://localhost:3000');
   
// })

///               simple express server
//const express = require('express')
// const app = express()

// app.get('/', (req,res) => {
//    res.send('hello, world')
// })

// app.listen(3000, () => {
//    console.log('running: http://localhost:3000')
   
// })

                  //pipe()
// const fs = require('fs')
// const readableStream = fs.createReadStream('exe.txt')
// const writableStream = fs.createWriteStream('exe2.txt')

// readableStream.pipe(writableStream)
// console.log('success')

                        //processnextTick
   // console.log('outside');
   // process.nextTick(() => {
   //    console.log('inside nexttick');
      
   // })
   // console.log('afterr');
   
   
