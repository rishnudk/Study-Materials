const express = require('express')
const app = express()

app.use((req,res,next) => {
    res.locals.user = { name:'john', age: 11}
    next()
})

app.get('/',(req,res) => {
    console.log(res.locals.user)
    res.send(`user name is: ${res.locals.user.name}`)
    
})
app.listen(3000,() => {
    console.log('runningg');
    
})