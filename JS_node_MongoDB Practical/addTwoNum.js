
const express = require('express')
const app = express()

app.get('/add/:num1/:num2', (req,res) => {
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)

    const sum = num1 + num2

    res.send({ num1, num2, sum})
})

app.listen(3000, () => {
    console.log('running on 3000')
})