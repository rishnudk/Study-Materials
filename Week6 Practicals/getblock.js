const express = require('express')
const app = express();

app.use((req,res,next) => {
    if(req.method === 'GET'){
        res.status(403).send('get blocked')
    }else {
        next()
    }
})
app.get('/', (req,res) => {
    res.send('hello')
})
app.listen(3005,() => {
    console.log('workinggg');
    
})