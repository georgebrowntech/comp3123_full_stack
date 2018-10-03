var fs=require('fs');


var stream=fs.createReadStream('./data.txt');
var file=fs.createWriteStream('./output.txt');
stream.on('data',function(data){
    console.log(data);
    console.log(data.toString())
    file.write(data.toString());
})

stream.on('end',function(){
    console.log('Write is complete!');
})