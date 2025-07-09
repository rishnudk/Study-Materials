

const express = require('express')
const app = express();

app.use(express.json());

app.use((req,res,next) => {
    console.log('params running')

    try{
        const routeParams = Object.keys(req.params || {})
        if(routeParams.length) {
            console.log('route params' , routeParams)
        } 
    } catch (err) {
        console.log('error happnd')
    }
    next();
 })

 app.get('/user/:id' , (req,res) => {
    res.send('prams done')
 })

 app.listen(3000, () => {
    console.log('runns on 3000')
 })