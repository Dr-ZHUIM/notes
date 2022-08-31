const eventEmitter = require('events');

const myEmitter  = new eventEmitter();

myEmitter.on('go',()=>{
    console.log('gogogo');
})

myEmitter.emit('go')