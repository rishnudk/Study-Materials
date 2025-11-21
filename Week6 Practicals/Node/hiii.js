const fs = require('fs')

const readStream = fs.createReadStream('exe.txt')
const writeStream = fs.createWriteStream('exe2.txt')

readStream.pipe(writeStream)
console.log('ssss');
