const fs = require('fs')

let readStream = fs.createReadStream('data.txt')
let writeStream = fs.createWriteStream('output.txt')

readStream.on('data', (data) => {
    console.log(data)
    console.log(data.toString('utf8'))
    writeStream.write(data.toString('utf8'))
})

readStream.read(0)

// readStream.

