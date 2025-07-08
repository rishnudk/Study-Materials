const express = require('express')

const app = express()

app.get('/api/hello', (req,res) => {
    res.send('hello world')
})
app.listen(3000,() => {
    console.log('success');
    
})