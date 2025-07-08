//router level middlewre

const express = require('express')
const app = express();
const router = express.Router()

router.use((req,res,next) => {
    console.log('Router-level middleware');
    next()
})
router.get('/',(req,res) => {
    res.send('Ruter level example')
})
app.use('/router',router)
app.listen(3000, () => { console.log('Server is running on port http://localhost:3000/router'); });
