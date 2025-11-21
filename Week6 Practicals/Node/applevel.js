const express = require('express')

const app = express()

app.use((req,res,next) => {
    console.log('req received')
    next()
}
)

app.get('/' , (req,res) => {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('running')
})