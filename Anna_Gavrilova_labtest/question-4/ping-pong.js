var events=require('events');
var moment=require('moment');
var eventEmitter=new events.EventEmitter();
var counter=0;
eventEmitter.on('Ping',function(){

    console.log("Ping!--Count: "+counter+"--Time: "+moment().format())
    counter++;
    if(counter<=15)
    setTimeout(()=>{eventEmitter.emit("Pong")},1000)
    else
    console.log("Game over!")
    
})

eventEmitter.on('Pong',function(){
    console.log("Pong!--Count: "+counter+"--Time: "+moment().format())
    counter++;
    if(counter<=15)
    setTimeout(()=>{eventEmitter.emit("Ping")},1000)
    else
    console.log("Game over!")
})

eventEmitter.emit("Ping");