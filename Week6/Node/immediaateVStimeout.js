

//              setImmediate vs setTimeout()
const fs = require('fs')

fs.readFile('hi.txt', () => {
    setTimeout(() => {
        console.log('timeoutt');
        
    },0)
    setImmediate(() => {
        console.log('immediate');
        
    })
})