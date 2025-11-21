

const express = require('express')
const app = express()


app.use((req,res,next) => {
  console.log('router level middleware')
  next()
})

app.get('/about', (req,res) => {
  res.send('aboutpage')
})

app.listen(3000, () => {
  console.log('running on 3000')
})