var fs=require('fs');
var zlib=require('zlib');

var stream=fs.createReadStream('./output.txt');
stream.pipe(fs.createWriteStream('./output.txt.gz'))