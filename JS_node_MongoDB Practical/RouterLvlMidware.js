

const express = require('express')
const app = express()
const router = express.Router()

router.use((req,res,next) => {
    console.log('router level middleware')
    next();
})

router.get('/about' , (req,res) => {
    res.send('about page')
} )

app.use('/home', router)
app.listen(3000, () => {
    console.log('server on 3000')
})