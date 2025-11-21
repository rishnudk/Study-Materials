const express = require('express')
const app = express()
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'oddeven.html'))
})

app.post('/find', (req, res) => {
    const {number} = req.body
    var result
    if (number % 2 == 0) {
        result = 'even'
    } else {
        result = 'odd'
    }
    res.send(result)
})

app.listen(3003, ()=> {
    console.log('Server started!');
})