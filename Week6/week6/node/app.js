const express = require('express')
const app = express()


app.use((req,res,next) => {
    console.log(`req received : ${req.method} ${req.url}`);
    next()
    
})
app.get('/', (req,res) => {
    res.send('helloooo')
})



app.listen(3000, () => {
    console.log('runninggg');
    
})