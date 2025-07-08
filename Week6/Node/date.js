const fs = require('fs')
const datex = new Date().toString()

fs.writeFile('date.txt',datex,(err) => {
    if(err) {
        console.log('error occured', err);
        
    } else {
        console.log('success');
        
    }
})