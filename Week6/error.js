const express = require('express')
const app = express()

app.get('/', (req,res) => {
    throw new Error('something wrong')
})
app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('internal error')
    
})
app.listen(3000,() => {
    console.log('server is runn http://localhost:3000');
    
})