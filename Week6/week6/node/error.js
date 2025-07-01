const express = require ('express')
const app = express()


app.get('/',(req,res) => {
    throw new Error('this is error')
})

app.use((err,req,res,next) => {
    console.log(err.stack);
    res.status(500).send('broke')
    
})





app.listen(3000,() => {
    console.log('server running');
    
})