const express = require('express')
const app = express()
const router = express.Router()


router.use((req,res,next) {
    console.log(`req received: ${req.url}`)
    next()
    
})
router.get('/about', (req,res) => {
    res.send('about page')
})
app.use('/api', router )




app.listen(3000, () => {
    console.log('success');
    
})