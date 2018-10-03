const moment = require('moment')
const events = require('events')
const emitter = new events.EventEmitter

let count = 0

const ping = () => {
    console.log(`Ping!-- Count: ${count} -- Time: ${moment()}`)
    
    if(count == 15) {
        console.log("Game Over!")
    } else {
        setTimeout(() => emitter.emit('Pong'), 1000)
    }
    count += 1
}

const pong = () => {
    console.log(`Pong!-- Count: ${count} -- Time: ${moment()}`)
    
    if(count >= 15) {
        console.log("Game Over!")
    } else {
        setTimeout(() => emitter.emit('Ping'), 1000)
    }
    count += 1
}

emitter.addListener('Ping', ping)
emitter.addListener('Pong', pong)

emitter.emit('Ping')
