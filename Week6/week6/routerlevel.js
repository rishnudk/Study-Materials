const express = require('express')
const app = express()
const router = express.router()

router.use((req,res,next) => {
    console.log('router level')
    next()
})
router.get('/' , (req,res) => {
    res.send('this is the homw route')
})
router.get('/about' , (req,res) => {
    res.send('this is the aboute')
})
app.use('router' , router)

app.listen(3000,() => {
    console.log('running')
})