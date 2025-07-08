const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('this runs for all');
    next()
    
})

app.get('/', (req,res) => {
    res.send('welcome page')
})
app.get('/about', (req,res) => {
    console.log('about page');
    
})

app.listen(3000, () => {
   console.log('server running');
   
})