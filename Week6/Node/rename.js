const fs = require('fs')

fs.rename('exe.txt','hi.txt', (err) => {
    if(err) {
        console.log('error occured', err);
        
    } else {
        console.log('success');
        
    }
})