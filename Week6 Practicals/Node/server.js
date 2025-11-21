//built-in middleware

// const express = require('express')
// const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended :true}))
// app.use(express.static('public'))


//application level middleware

// const express = require('express')
// const app = express()

// const logger = (req,res,next) => {
//     console.log(`${req.method}  ${req.url}`);
//     next();
    
// }
// app.use(logger)
// app.get('/' , (req,res) => {
//     res.send('hello world')
// });

// app.listen(3000, () => { 
//     console.log('Server is running on port http://localhost//:3000') });

// router level middlewre

// const express = require('express')
// const app = express();
// const router = express.Router()

// router.use((req,res,next) => {
//     console.log('Router-level middleware');
//     next()
// })
// router.get('/',(req,res) => {
//     res.send('Rputer level example')
// })
// app.use('/router',router)


app.listen(3000, () => { console.log('Server is running on port http://localhost:3000'); });