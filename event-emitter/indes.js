const eventEmitter = require('events')
const myfirstEmitter = new eventEmitter()

myfirstEmitter.on('event1', (message) => {
    console.log('Event 1 triggered:', 2*message);
})

// myfirstEmitter.emit('event1', 5);