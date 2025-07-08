const express = require('express')
const app = experss()

app.get('/' , (req,ers) => {
    throw new Error("something wrong")
})

app.use((err,req,res,next) => {
    console.error(err.message)
    res.status(500).send('something wrong')
}) 

app.listen(3000, () => {
    console.log('runninggg')
})