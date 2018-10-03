const fs = require('fs')
const zlib = require('zlib')

const readStream = fs.createReadStream('output.txt')

const writeStream = fs.createWriteStream('output.txt.gz');

readStream.pipe(writeStream)