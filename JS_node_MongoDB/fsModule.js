

const fs = require('fs')


fs.readFile('text.txt', 'utf8', (err,data) => {
    if(err) throw err
    console.log(data)
})

fs.writeFile('textt.txt', 'new line adding', err => {
    if(err) throw err
    console.log('success')
}) 

fs.appendFile('text.txt', '\n append line', err => {
    if(err) throw err;
    console.log('appended')
})

