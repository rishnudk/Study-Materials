const express = require('express')
const app = express()
const path = require('path')
const viewsPath = path.join('/week6/node/home','views')
app.set('view engine','hbs')






app.get('/home', (req,res) => {
    res.render('home')
})
app.listen(3000,() => {
    console.log('runningg');
    
})